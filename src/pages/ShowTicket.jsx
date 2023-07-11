import react from "react";
import EventTicket from "../components/EventTicket";


export default function ShowTicket() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
                <div className="d-flex-custom">
                    <EventTicket
                        img="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="Event Title"
                        description="
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo eius aperiam, ab tempora officia dolorem porro omnis repellat molestiae iure quae! Earum quibusdam cum voluptates quisquam praesentium quidem perspiciatis."
                        capacity="50"
                        startdate="YYYY-MM-DD"
                        enddate="YYYY-MM-DD"
                    />

                </div>
            </div>
            <div className="col">
                <div className="d-flex-custom">
                    {/* paste code start here */}
                    HI
                    {/* paste code end here */}


                </div>
            </div>

        </div>
    )
}