import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/survey");
	};
	return (
		<div className="bg-[url('/bg-1.jpg')] bg-center bg-no-repeat bg-cover h-screen grid place-content-center ">
			<div className="max-w-[80rem] max-h-[66rem] bg-slate-200 bg-opacity-90 custom-border-transparent relative">
				<div className="p-[2.5rem] mb-[5rem]">
					<h1 className="text-[3.4rem] text-center tracking-widest  text-[#0077b6] font-bold">
						WELCOME TO SURVEY
					</h1>
					<div className="mt-[3rem] text-[1.8rem] ">
						<p className="text-[#fb8500] text-[2.4rem] font-semibold text-center">
							Hello, Human
						</p>
						<p className="mt-[3rem] mb-[1rem]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur, itaque repellat. Iusto consequuntur vitae ipsa
							sapiente natus tempora veritatis, id fuga? Iusto error, harum fuga
							illum dolorem corporis rem facere cupiditate explicabo minima
							consequatur odio nisi a sed asperiores et.
						</p>
						<p className="mb-[1rem]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
							soluta mollitia, iure maiores esse exercitationem officia ratione
							saepe quae rerum.
						</p>
						<p>You must fill all fields, to be able to continue</p>
						<button
							onClick={handleClick}
							className="absolute py-[1rem] px-[3rem]  bg-[#0077b6] text-white tracking-widest rounded-[0.4rem] right-[5rem] bottom-[3rem] hover:bg-[#023e8a]">
							NEXT
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
