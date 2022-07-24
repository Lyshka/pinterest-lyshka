import {Routes, Route, useNavigate} from "react-router-dom"
import Login from "./components/Login";
import Home from "./container/Home";
import {GoogleOAuthProvider} from "@react-oauth/google"
import {useEffect} from "react";
import {fetchUser} from "./utils/fetchUser";


const App = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const user = fetchUser()

		if(!user) navigate('/login')
	}, [])

	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</GoogleOAuthProvider>
	);
};

export default App;