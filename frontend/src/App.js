import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeStay from "./components/HomeStay";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import EditCustomer from "./components/EditCustomer";
import RoomList from "./components/RoomList";
import AddRoom from "./components/AddRoom";
import EditRoom from "./components/EditRoom";
import BookingList from "./components/BookingList";
import AddBooking from "./components/AddBooking";
import EditBooking from "./components/EditBooking";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeStay />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers/add" element={<AddCustomer />} />
          <Route path="customers/edit/:id" element={<EditCustomer />} />
          <Route path="rooms" element={<RoomList />} />
          <Route path="rooms/add" element={<AddRoom />} />
          <Route path="rooms/edit/:id" element={<EditRoom />} />
          <Route path="bookings" element={<BookingList />} />
          <Route path="bookings/add" element={<AddBooking />} />
          <Route path="bookings/edit/:id" element={<EditBooking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
