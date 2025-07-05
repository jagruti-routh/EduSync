# EduSync – Unified Lab Network Management 🖥️

A centralized lab control system built using **Electron** and **Node.js** that enables administrators to manage and monitor multiple student PCs from a single admin dashboard. Designed for educational labs to streamline the installation, updating, and uninstallation of applications during lectures, exams, or practical sessions.


## 🚀 Features
- Real-time connection with student PCs via **Socket.io**
- Remote **installation**, **update**, and **uninstallation** of applications
- **Notification system** for new connections, disconnections, and install success/failure
- Tracks application install status: `installing`, `installed`, `failed`
- Each student PC is **uniquely identified and stored** in a MySQL database
- Logs every activity (e.g., command sent, response received, failure handled)
- Desktop app with easy-to-use GUI built using **Electron**


## 🛠️ Tech Stack

| Component        | Technology       |
|------------------|------------------|
| Frontend (UI)    | Electron, HTML/CSS/JS |
| Backend (Server) | Node.js, Socket.io |
| Database         | MySQL            |
| Communication    | WebSockets       |
| OS               | Windows/Linux    |



### 🖥️ Admin Dashboard  
![Dashboard](dashboard1.png)

### 🧾 Live Logs  
![Logs](logs.png)

### PC Details  
![PC Details](pc_details.png)

---

## 🧠 Use Case

EduSync is designed for college or university computer labs where a faculty member needs to manage multiple student PCs from a single dashboard.

With EduSync, the admin can:
- 📦 Push software installations, updates, or uninstallations to all connected student systems
- 🔗 Monitor the real-time connection status of each student PC
- 🖥️ Centrally control lab activities and system behavior through an intuitive dashboard
- 🧾 Log all activities and maintain audit trails for lab sessions or exams


