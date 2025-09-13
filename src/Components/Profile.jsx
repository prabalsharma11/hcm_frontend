import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Profile = () => {
  const date = new Date()
  const temp = date.toISOString().slice(0,10)
  let arr = temp.split("-")
  arr[0] = Number(arr[0]) - 18
  const finalDate = arr.join("-")

  const dispatch = useDispatch()
  const userSliceData = useSelector((store) => {
    return store.user
  })
  const navigate = useNavigate()
  const [image, setImage] = useState(userSliceData.image || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
  const [firstName, setFirstName] = useState(userSliceData.firstName || "")
  const [lastName, setLastName] = useState(userSliceData.lastName || "")
  const [DOB, setDOB] = useState(userSliceData.DOB || "")
  const [bio, setBio] = useState(userSliceData.bio || "")

  return (
    <>
      {userSliceData && (
        <div className="max-w-xl mx-auto bg-white mt-14 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] space-y-6">
          <div className="flex flex-col items-center">
            <img
              className="h-36 w-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              src={image}
              alt="Profile"
            />
          </div>

          <input
            onChange={async (e) => {
              const url = URL.createObjectURL(e.target.files[0])
              setImage(url)

              let obj = e.target.files[0]
              let newFormData = new FormData()
              newFormData.append("file", obj);
              newFormData.append("upload_preset", "tidy9idl");

              let res = await axios.post("https://api.cloudinary.com/v1_1/derddgaed/image/upload", newFormData)
              setImage(res.data.url)
            }}
            type="file"
            accept="image/*"
            className="w-full px-4 py-3 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            value={DOB}
            onChange={(e) => {
              const selectedDate = e.target.value;
              if (selectedDate > finalDate) {
                toast.error(`Date cannot be later than ${finalDate}`);
                return;
              }
              setDOB(selectedDate);
            }}
            type="date"
            max={finalDate}
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Bio"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-28"
          />

          <div className="text-right">
            <button
              onClick={() => {
                async function getBio() {
                  const res = axios.post(baseUrl + "/profile/generate-bio", {interests : bio}, {withCredentials : true})
                  toast.promise(res, {
                    loading : "Generating Bio",
                    success : (res) => {
                      setBio(res.data.bio)
                      return "Bio Generated Successfully"
                    },
                    error : "Error Generating Bio"
                  })
                }
                getBio()
              }}
              className="text-sm text-blue-500 hover:text-blue-700 transition duration-200"
            >
              ✨ Get AI Generated Bio
            </button>
          </div>

          <button
            onClick={async () => {
              try {
                
              if(image == "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
              {
                toast.error("Please Upload Your Image!!")
                return
              }
              if (!firstName || !lastName || !DOB || !image || !bio ) {
                toast.error("Please enter all the fields")
                return
              }
              let res = await axios.patch(baseUrl + "/profile/edit", { firstName, lastName, DOB, image, bio }, { withCredentials: true })
              if (res.status == 202) {
                dispatch(addUser(res.data.data))
                toast.success(res.data.msg)
                navigate("/profile")
              } else {
                toast.error("Please Enter valid data")
              }
              } catch (error) {
                console.log(error.response.data.error)
                toast.error(error.response.data.error)
              }
            }}
            className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
