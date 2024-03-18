import React, { useState } from 'react'
import "../App.css"
import Table from './Table';
import ShowError from './ShowError';

function Form() {
    const [errorFinder, setErrorFinder] = useState("");
    const [warnNameField, setWarnNameField] = useState();
    const [warnEmailField, setWarnEmailfield] = useState();
    const [warnPasswordField, setWarnPasswordField] = useState();
    const [warnPasswordNums, setWarnPasswordNums] = useState("");
    const [allFieldData, setAllFieldData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        languageOne: "",
        languageTwo: "",
        degree: "",
        wakeUpTime: 12,
        message: ""
    });


    const checkLangOne = (e) => {
        if (e.target.checked) {
            setAllFieldData(prevPerson => {
                return {
                    ...prevPerson,
                    languageOne: "English"
                }
            })
        } else {
            setAllFieldData(prevPerson => {
                return {
                    ...prevPerson,
                    languageOne: ""
                }
            })
        }
    };

    const checkLangTwo = (e) => {
        if (e.target.checked) {
            setAllFieldData(prevPerson => {
                return {
                    ...prevPerson,
                    languageTwo: "Other"
                }
            })
        } else {
            setAllFieldData(prevPerson => {
                return {
                    ...prevPerson,
                    language: ""
                }
            })
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        // if (allFieldData.name.length < 1 || allFieldData.name.includes()) {
        //     setWarnNameField("2px solid red");
        // } else {
        //     setWarnNameField("none");
        //     document.getElementById("resultTable").style.left = "0%";
        // }
        if (allFieldData.gender.length < 1) {
            setErrorFinder("Unexpected Errors encounter");
        }

    };

    return (

        <div className='container'>

            <ShowError error={errorFinder} passwordWatn={warnPasswordField} passwordWarnNums={warnPasswordNums} />

            <form action="/">
                <div className="row">
                    <label htmlFor="userName">Name :</label>
                    <input type="text" name="name" id="userName" style={warnNameField} onChange={(e) => {
                        setAllFieldData(prev => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        });
                        // Regular expression to match any special characters
                        const specialCharRegex = /[!@#$%^=&+=_*()-]/;
                        // Regular expression to match any numbers
                        const numRegex = /[0-9]/;

                        // Check for special characters
                        if (specialCharRegex.test(e.target.value) || numRegex.test(e.target.value)) {
                            setWarnNameField({
                                border: "2px solid red",
                                color: "red"
                            });
                        } else {
                            setWarnNameField({
                                border: "none",
                                color: "#000"
                            });
                        }
                    }} />
                </div>
                {/* //* NAME END // */}
                <div className="row">
                    <label htmlFor="userEmail">Email :</label>
                    <input type="email" name="email" id="userEmail" style={warnEmailField} onChange={(e) => {
                        setAllFieldData(prev => {
                            return {
                                ...prev,
                                email: e.target.value
                            }
                        })
                        // Regular expression to match any special characters
                        const specialCharRegex = /[!#$%^=&+=_*()-]/;
                        // Regular expression to match any numbers
                        const numRegex = "@gmail.com";

                        // Check for special characters
                        if (specialCharRegex.test(e.target.value) || !String(e.target.value).includes(numRegex)) {
                            setWarnEmailfield({
                                border: "2px solid red",
                                color: "red"
                            });
                        } else {
                            setWarnEmailfield({
                                border: "none",
                                color: "#000"
                            });
                        }
                    }} />
                </div>
                {/* //* Email END // */}
                <div className="row">
                    <label htmlFor="userPassword">Password :</label>
                    <input type="password" name="password" id="userPassword" onChange={(e) => {
                        setAllFieldData(prevPerson => {
                            return {
                                ...prevPerson,
                                password: e.target.value
                            }
                        })
                        if (allFieldData.password.length > 0) {
                            // Regular expression to match any special characters
                            const specialCharRegex = /[!#$%^=&+=_*()-]/;
                            // Regular expression to match any numbers
                            const numRegex = /[0-9]/;

                            // Check for special characters
                            if (!specialCharRegex.test(e.target.value)) {
                                setWarnPasswordField(
                                    <li>password must contain "[!#$%^=&+=_*()-]" a single character</li>
                                );
                            } else {
                                setWarnPasswordField("");
                            }
                            if (!numRegex.test(e.target.value)) {
                                setWarnPasswordNums(<li>password must contain a [0-9] digit</li>)
                            } else {
                                setWarnPasswordNums("")
                            }
                        } else {
                            setWarnPasswordField("");
                            setWarnPasswordNums("")
                        }
                    }} />
                </div>
                {/* //* Password END // */}
                <div className="row" id='genRow'>
                    <label htmlFor="gender">Gender :</label>
                    <div className="horizontal-aligner">
                        <div className="form-radio-field">
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="male" onChange={() => {
                                setAllFieldData(prevPerson => {
                                    return {
                                        ...prevPerson,
                                        gender: "Male"
                                    }
                                })
                            }} />
                        </div>
                        <div className="form-radio-field">
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="female" onChange={() => {
                                setAllFieldData(prevPerson => {
                                    return {
                                        ...prevPerson,
                                        gender: "Female"
                                    }
                                })
                            }} />
                        </div>
                    </div>
                </div>
                {/* //* Gender END // */}
                <div className="row">
                    <label htmlFor="languages">Language :</label>
                    <div className="horizontal-aligner">
                        <div className="form-field">
                            <label htmlFor="eng">English</label>
                            <input type="checkbox" name="languages" id="eng" onChange={checkLangOne} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="other">Other</label>
                            <input type="checkbox" name="languages" id="other" onChange={checkLangTwo} />
                        </div>
                    </div>
                </div>
                {/* //* Language END // */}
                <div className="row">
                    <label htmlFor="degree">Degree : </label>
                    <select name="" id="degree" onChange={(e) => {
                        setAllFieldData((prev => {
                            return {
                                ...prev,
                                degree: e.target.value
                            }
                        }))
                    }}>
                        <option value="">Select Degree</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="PHD">PHD</option>
                    </select>
                </div>
                {/* //* Degree END // */}
                <div className="row">
                    <label htmlFor="wakeUp">WakeUp Time :</label>
                    <div className="horizontal-aligner">
                        <div className="form-field">
                            <span>{allFieldData.wakeUpTime}</span>
                            <input type="range" name="wakeUpTime" id="wakeUp" min={6} max={12} step={1} onChange={(e) => {
                                setAllFieldData((prev => {
                                    return {
                                        ...prev,
                                        wakeUpTime: e.target.value
                                    }
                                }))
                            }} />
                            <span>O Clock</span>
                        </div>
                    </div>
                </div>
                {/* //* WakeUp Time END // */}
                <div className="row" id='commentBox'>
                    <label htmlFor="message">Message :</label>
                    <textarea name="" id="message" cols="100" rows="10" onChange={(e) => {
                        setAllFieldData((prev => {
                            return {
                                ...prev,
                                message: e.target.value
                            }
                        }))
                    }}></textarea>
                </div>
                {/* //* Comment END // */}
                <div className="row">
                    <input type="submit" value="Submit" onClick={submitForm} />
                </div>
                {/* //* Submit END // */}
            </form >
            <Table
                name={allFieldData.name}
                email={allFieldData.email}
                password={allFieldData.password}
                gender={allFieldData.gender}
                langOne={allFieldData.languageOne}
                langTwo={allFieldData.languageTwo}
                degree={allFieldData.degree}
                wakeup={allFieldData.wakeUpTime}
                message={allFieldData.message} />
        </div >
    )
}

export default Form
