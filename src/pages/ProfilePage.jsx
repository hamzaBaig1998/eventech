import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

export default function ProfilePage() {
  return (
    <div className="bg-crowd">
    <NavBar />
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 class="text-center mb-4">Profile Page</h1>
      <form className="p-5 rounded shadow bg-white">
        <div class="row">
          <div class="col-md-6">

          <div class="row py-5 px-4">
            <div class="col-md-5 mx-auto">
                        <div class="bg-white shadow rounded overflow-hidden">
                        <div class="px-4 pt-0 pb-4 cover">
                       <div class="media align-items-end profilepage-head">
                       <div class="profilepage mr-3 mb-4">
                        <img src="htps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-FTr8wwpK2fQ9E1h9uhr0avZSmuVKGAnb6X5Dmal-_Nhvw-kJ&usqp=CAU" alt="..." width="130" class="rounded mb-2 img-thumbnail">  
                        </img>
                        </div>
                        <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">Attendee Name</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>Deigner</p>
                        </div>
                        </div>
            </div>
            
            <div class="bg-light p-4 d-flex justify-content-center text-center mt-3">
                
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">100</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Points Gained</small>
                    </li>
                   
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">50</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Posted Designs</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">25</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Won Challenges </small>
                    </li>
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">About</h5>
                <div class="p-4 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">Lives in New York</p>
                    <p class="font-italic mb-0">amelly22@gmail.com</p>
                    <p class="font-italic mb-0"></p>
                </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recently posted designs</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                </div>
                <div class="row">
                </div> 
                </div>
                <div class="profilepage mt-5"> <button class="profilepage_button px-2">Unsubscribe Brands</button> <button class="profilepage_button px-2">Collect Rewards</button> <button class="profilepage_button px-2">Back To Homepage</button> </div>
            </div>
        </div>
        </div>
        </div>
        </div>
</form>
    </div>
</div>
  );
}

