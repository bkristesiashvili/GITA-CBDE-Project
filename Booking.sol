// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IProjectSubmitContractCall {
    function receiveProjectData(string memory, string memory, string memory) external payable;
    function isProjectReceived() external view returns (bool);
}

// Status enum for room booking
enum Status { Free, Booked }

// data structure for room object declaration
struct Room{ uint256 roomId; uint256 roomNumber; Status roomStatus; address bookedBy; } 

//data structre for room booking checkin/checkout history
struct BookingHistory{ uint256 roomId; address bookedBy; address checkedOutBy; uint256 checkInTime; uint256 checkoutTime; } 

contract Booking is Ownable{
    uint256 private cost = 10_000 gwei;

    Room[] public rooms;
    uint256 private  bookedRoomsCount = 0;

    mapping(uint256 => BookingHistory[]) private bookedRooms;

    event CheckedIn(uint256 roomId, address bookedBy);

    event CheckedOut(uint256 roomId, address bookedBy);

    receive() external payable {}

    fallback() external payable {}

    // check if has access to check-out the room
    modifier checkOutAccess(uint256 roomId){
        require(rooms[roomId].bookedBy == msg.sender || owner() == msg.sender);
        _;
    }

    // checks if room booking cost is enough
    modifier bookingCosts(){
        require(cost == msg.value);
        _;
    }

    // checks if room is free
    modifier freeRoom(uint256 roomId){
        require(rooms[roomId].roomStatus == Status.Free);
        _;
    }

    // checks if room is booked
    modifier bookedRoom(uint256 roomId){
        require(rooms[roomId].roomStatus == Status.Booked);
        _;
    }

    // checks if room id is in range
    modifier roomIdExists(uint256 roomId){
        require(roomId < rooms.length);
        _;
    }

    // instantiate Booking contract
    constructor(uint256 roomsCount){
        for(uint256 i = 0; i < roomsCount; i++){
            rooms.push(Room(i, i + 1, Status.Free, address(0)));
        }
    }

    // function for booking chosen room
    function bookRoom(uint256 roomId) external payable freeRoom(roomId) roomIdExists(roomId) bookingCosts{

        rooms[roomId].roomStatus = Status.Booked;
        rooms[roomId].bookedBy = msg.sender;

        bookedRooms[roomId].push(BookingHistory(roomId, msg.sender, address(0), block.timestamp, 0));

        bookedRoomsCount += 1;

        emit CheckedIn(roomId, msg.sender);
    }

    // function for checkout from the room
    function checkOut(uint256 roomId) external payable roomIdExists(roomId) bookedRoom(roomId) checkOutAccess(roomId) bookingCosts{
        
        rooms[roomId].roomStatus = Status.Free;
        rooms[roomId].bookedBy = address(0);

        uint256 length = bookedRooms[roomId].length;

        bookedRooms[roomId][length - 1].checkoutTime = block.timestamp;
        bookedRooms[roomId][length - 1].checkedOutBy = msg.sender;

        bookedRoomsCount -= 1;

        emit CheckedOut(roomId, msg.sender);
    }

    // function for getting room info
    function getRoomStatus(uint256 roomId) public view returns (Room memory){
        return rooms[roomId];
    }

    // function for getting check-in/check-out info about room
    function getRoomHistory(uint256 roomId)public view onlyOwner returns(BookingHistory[] memory){
        return  bookedRooms[roomId];
    }

    // gets total rooms count
    function getTotalRooms() public view returns(uint256){
        return  rooms.length;
    }

    // gets available rooms count
    function getAvailableRoomsCount() public view returns(uint256){
        return rooms.length - bookedRoomsCount;
    }

    // submit finished project data for remote SC call
    // SC Address: 0x1298aFF3Bf44B87bfF03f864e09F2B86f91BE16F 
    function projectSubmitted(string memory _codeFileHash,string memory _topicName, string memory _authorName, address _sendHashTo) external payable onlyOwner{
        IProjectSubmitContractCall(_sendHashTo).receiveProjectData{value: msg.value, gas: 1000000}(_codeFileHash, _topicName, _authorName);
    }

    // get result if project submited to the remote SC
    function projectReceived()public view onlyOwner returns(bool){
        return  IProjectSubmitContractCall(0x1298aFF3Bf44B87bfF03f864e09F2B86f91BE16F).isProjectReceived();
    }
}