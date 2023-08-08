import {
  faBagShopping,
  faCalendar,
  faCircle,
  faEquals,
  faPerson,
  faPersonRifle,
  faPlus,
  faPlusCircle,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import { AssesmentModal } from "./assesment-form";
import { useRef } from "react";

export const MyAssesment = () => {
    const modalRef=useRef();
  return (
    <>
      <div className="my-assesment my-assesment-overview">
        <div className="">
          <h1>Assesments Overview</h1>
        </div>
        <div className=" container-fluid ">
          <div className="row ">
            <div className="col-md-2 c-border c-box-1">
              <div>
                <span className="c1 py-2">Total Assesment</span>
                <div className="d-flex align-items-center">
                  <span className="c-iconBox p-2 text-center my-2">
                    <FontAwesomeIcon className="c-icon  " icon={faEquals} />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span className="c-text">23</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 c-border c-box-2">
              <div>
                <span className="c1 py-2">Candidates</span>
                <div className="d-flex align-items-center">
                  <span className="c-iconBox p-2 text-center my-2">
                    <FontAwesomeIcon className="c-icon  " icon={faPerson} />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <div className="border-right px-2">
                    <span className="c-text">
                      23 <sup className="small-text">+89</sup>
                    </span>
                    <br />
                    <span className="text-sm">Total candidate</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className=" px-2">
                    <span className="c-text">
                      23 <sup className="small-text">+89</sup>
                    </span>
                    <br />
                    <span className="text-sm">WHO Attampted</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 c-border c-box-2">
              <div>
                <span className="c1 py-2">Candidates</span>
                <div className="d-flex align-items-center">
                  <span className="c-iconBox p-2 text-center my-2">
                    <FontAwesomeIcon className="c-icon  " icon={faPerson} />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <div className="border-right px-2">
                    <span className="c-text">
                      23 <sup className="small-text">+89</sup>
                    </span>
                    <br />
                    <span className="text-sm">Email</span>
                  </div>
                  &nbsp;&nbsp;
                  <div className=" px-2 border-right">
                    <span className="c-text">
                      23 <sup className="small-text">+89</sup>
                    </span>
                    <br />
                    <span className="text-sm">Social share</span>
                  </div>
                  &nbsp;&nbsp;
                  <div className=" px-2">
                    <span className="c-text">
                      23 <sup className="small-text">+89</sup>
                    </span>
                    <br />
                    <span className="text-sm">Unique Link</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 c-border c-box-4">
              <div>
                <span className="c1 py-2">Total Assesment</span>
                <div className="d-flex align-items-center">
                  <span className="c-iconBox p-2 text-center my-2">
                    <FontAwesomeIcon className="c-icon  " icon={faEquals} />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span className="c-text">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-assesment my-assesment-cards pt-0">
        <div className="">
          <h1>My Assesment</h1>
        </div>
        <div className=" container-fluid ">
          <div className="row">
          <div className="col-md-4 col-12 col-12 p-0 ">
              <div className="card bg-light h-10 px-3" onClick={()=>modalRef.current()}>
               <div className="d-flex flex-column justify-content-center align-items-center h-100">
                 <div className="">
                 <FontAwesomeIcon icon={faPlusCircle} className="big-dot" />
                 </div>
                 <div className="text-center">
                    <span className="new-assesment text-center">
                        New Assesment
                    </span>
                    <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>

                 </div>
               </div>
              </div>
            </div>
            <div className="col-md-4 col-12 p-0 ">
              <div className="card">
                <div className="card-body">
                  <div className=" c-iconBox p-3">
                    <FontAwesomeIcon icon={faBagShopping} className="c-icon" />
                  </div>
                  <br />
                  <span className="c2-text">Math Assesment</span>
                  <br />
                  <span className="job">Job</span>&nbsp;|&nbsp;
                  <span className="date">
                    <FontAwesomeIcon icon={faCalendar} />
                    &nbsp;20 Apr 2023
                  </span>
                  <div className="dotted-line"></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div>
                        <span className="job">00</span>
                        <br />
                        <span className="job">Duration</span>
                      </div>
                      &nbsp;&nbsp;
                      <div>
                        <span className="job">00</span>
                        <br />
                        <span className="job">Duration</span>
                      </div>
                    </div>
                    <div className="d-flex">
                    <Badge pill bg="light" text="" className="badge">
                        <FontAwesomeIcon icon={faShare}/>&nbsp;Share
                    </Badge>
                    &nbsp;
                    <span className="dot">LP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 p-0 ">
              <div className="card">
                <div className="card-body">
                  <div className=" c-iconBox p-3">
                    <FontAwesomeIcon icon={faBagShopping} className="c-icon" />
                  </div>
                  <br />
                  <span className="c2-text">Math Assesment</span>
                  <br />
                  <span className="job">Job</span>&nbsp;|&nbsp;
                  <span className="date">
                    <FontAwesomeIcon icon={faCalendar} />
                    &nbsp;20 Apr 2023
                  </span>
                  <div className="dotted-line"></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div>
                        <span className="job">00</span>
                        <br />
                        <span className="job">Duration</span>
                      </div>
                      &nbsp;&nbsp;
                      <div>
                        <span className="job">00</span>
                        <br />
                        <span className="job">Duration</span>
                      </div>
                    </div>
                    <div className="d-flex">
                    <Badge pill bg="light" text="" className="badge">
                        <FontAwesomeIcon icon={faShare}/>&nbsp;Share
                    </Badge>
                    &nbsp;
                    <span className="dot">LP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AssesmentModal openModal={modalRef}/>
    </>
  );
};
