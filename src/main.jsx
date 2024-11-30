import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"chilli","emailId":"pidugubunny534@gmail.com","phoneNo":"123456789","projects":[{"title":"chilli","description":"chilli","technologies":["Python"],"repoLink":"chilli","_id":"674b1c82bc4c0ae9a295bdac"}],"resume":"","experiences":[{"companyName":"chilli","role":"chilli","description":"chilli","technologiesUsed":[],"duration":"chilli","_id":"674b1c82bc4c0ae9a295bdad"}],"techStacks":[],"contactDetails":[],"codingProfiles":[],"certifications":[],"achievements":[{"title":"chilli","description":"chilli","_id":"674b1c82bc4c0ae9a295bdae"}],"about":"chilli","profilePhoto":"","_id":"674b1c82bc4c0ae9a295bdab","createdAt":"2024-11-30T14:09:06.352Z","updatedAt":"2024-11-30T14:09:06.352Z","__v":0}} />
  </StrictMode>,
)
