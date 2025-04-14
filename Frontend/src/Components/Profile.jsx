import React, { useState } from 'react';
import './profile.css'; // Import the CSS file

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: 'kavi',
        email: 'kavi@gmail.com',
        profilePicture: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png' // or any static image URL
    });
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...profileData });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setProfileData(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(profileData);
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-content">
                <h1>{profileData.username}'s Profile</h1>
                <img 
                    src={profileData.profilePicture} 
                    alt={`${profileData.username}'s Profile`} 
                />
                <p>Email: {profileData.email}</p>
                {!isEditing ? (
                    <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
                ) : (
                    <div>
                        <h2>Edit Profile</h2>
                        <form>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                Profile Picture URL:
                                <input
                                    type="text"
                                    name="profilePicture"
                                    value={formData.profilePicture}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <button type="button" className="edit-button" onClick={handleSave}>Save</button>
                            <button type="button" className="edit-button" onClick={handleCancel}>Cancel</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
