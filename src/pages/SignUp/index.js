import React from 'react';

import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <form>
                <div className="form__row">
                    <div className="form__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                        >
                            <path
                                d="M18.2422 0.382812H1.75781C0.789766 0.382812 0 1.17172 0 2.14062V13.8594C0 14.825 0.78625 15.6172 1.75781 15.6172H18.2422C19.2078 15.6172 20 14.8309 20 13.8594V2.14062C20 1.175 19.2138 0.382812 18.2422 0.382812ZM17.9995 1.55469L10.0373 9.51691L2.00621 1.55469H17.9995ZM1.17188 13.6167V2.3777L6.81559 7.97301L1.17188 13.6167ZM2.00051 14.4453L7.64777 8.79805L9.62656 10.7598C9.85563 10.987 10.2253 10.9862 10.4534 10.758L12.3828 8.82863L17.9995 14.4453H2.00051ZM18.8281 13.6167L13.2114 8L18.8281 2.38328V13.6167Z"
                                fill="#666666"
                            />
                        </svg>
                    </div>
                    <div>
                        <input type="email" placeholder="Your email here" />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M15.625 7.34375H14.2173V4.13164C14.2173 1.85344 12.3248 0 9.99855 0C7.67234 0 5.7798 1.85344 5.7798 4.13164V7.34375H4.375C3.08266 7.34375 2.03125 8.39516 2.03125 9.6875V17.6562C2.03125 18.9486 3.08266 20 4.375 20H15.625C16.9173 20 17.9688 18.9486 17.9688 17.6562V9.6875C17.9688 8.39516 16.9173 7.34375 15.625 7.34375ZM7.3423 4.13164C7.3423 2.715 8.53391 1.5625 9.99855 1.5625C11.4632 1.5625 12.6548 2.715 12.6548 4.13164V7.34375H7.3423V4.13164ZM16.4062 17.6562C16.4062 18.087 16.0558 18.4375 15.625 18.4375H4.375C3.94422 18.4375 3.59375 18.087 3.59375 17.6562V9.6875C3.59375 9.25672 3.94422 8.90625 4.375 8.90625H15.625C16.0558 8.90625 16.4062 9.25672 16.4062 9.6875V17.6562Z"
                                fill="#666666"
                            />
                            <path
                                d="M10 11.1719C9.20176 11.1719 8.55469 11.8189 8.55469 12.6172C8.55469 13.1269 8.81875 13.5746 9.2173 13.832V15.5469C9.2173 15.9783 9.56707 16.3281 9.99855 16.3281C10.43 16.3281 10.7798 15.9783 10.7798 15.5469V13.8338C11.18 13.5768 11.4453 13.1281 11.4453 12.6172C11.4453 11.8189 10.7982 11.1719 10 11.1719Z"
                                fill="#666666"
                            />
                        </svg>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Your password here"
                        />
                    </div>
                </div>
                <button type="submit">Register</button>
                <Link to="/">Login</Link>
            </form>
        </>
    );
};

export default SignUp;
