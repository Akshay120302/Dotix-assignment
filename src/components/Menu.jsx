import { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import "../style/Menu.css";

const Menu = ({ closeMenu , setShowLoginModal ,showLoginModal }) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    const { isAuthenticated, user } = useAuth0();

    return (
        <>
            <div className="modal-wrapper2">
                <div className="modal-container2">

                    <i class="fa-solid fa-xmark" onClick={closeMenu}></i>


                    <div className="menu">
                        <br />
                        <div className="fir">
                            {isAuthenticated ? (

                                <div className="UserName">{user.name}</div>) :
                                (
                                    <div className="UserName">User Login</div>
                                )}
                            <div className="ProfileImg">
                                {isAuthenticated ? (
                                    <img className="ProfileImg" alt='ProfileImg' src={user.picture} />) :
                                    (
                                        <i className="fa-solid fa-user"></i>
                                    )}
                                    </div>
                            </div>

                            <div className="fir">is</div>

                            <div className="fir">for</div>

                            <div className="fir">placing</div>

                            <div className="fir">additional</div>

                            <div className="fir">options</div>

                        </div>
                    </div>


                </div>

            </>
            );
};


            export default Menu;