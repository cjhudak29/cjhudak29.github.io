import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


const Footer: React.FC = () => {
    return (
        <footer>
            <div className='contaier'>
                {/* Footer content */}
                <hr />
                <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
                <p>&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
