import React from 'react'
import PropTypes from 'prop-types'; 

function Profil(props) {
    const {fullName, bio, profession, children, handleName } = props;
    
    const profileStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid gray',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
        width: '400px',
        margin: '20px'
      };
    
      const imageStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginBottom: '20px'
      };
      return (
        <div style={profileStyle}>
          <img src={children} alt="profile" style={imageStyle} onClick={() => handleName(fullName)} />
          <h2>{fullName}</h2>
          <h4>{profession}</h4>
          <p>{bio}</p>
        </div>
      );
}
Profil.defaultProps = {
    fullName: 'John Doe',
    bio: 'No bio provided',
    profession: 'Unknown',
    children: '',
    handleName: () => alert('No name provided')
  };

  Profil.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };

export default Profil;
