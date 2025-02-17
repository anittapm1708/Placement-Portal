import axios from "axios";
import { useContext, useState } from "react";
import { Jobscontext } from "../../context/Jobscontext";
import Job from '../../components/FacultyJob';
import '../../css/JobsPage.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
/>
const Jobspage = () => {
    const context=useContext(Jobscontext);
    const {jobs}=context;
    
    console.log(jobs)
    return (
        <div className="jobs-main">
            <div id="head-container" className="d-flex justify-content-between">
                <h1 id="heading">JOB ALERTS</h1>
            </div>
            <div className="content">
                {jobs && (
                    <div className="row row-cols-2">
                        {jobs.map((job) => (
                            <div className="col" key={job._id}>
                                <Job job={job} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    )
}

export default Jobspage;