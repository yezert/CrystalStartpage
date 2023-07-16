import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import "../assets/stylesheet/index.css";
import { useState } from "react";

export default function ({ close }: any) {
	const [Apps, setApps] = useState([
		{ name: "Bilibili", url: "https://bilibili.com" },
		{ name: "Baidu", url: "https://baidu.com" },
		{ name: "Github", url: "https://github.com" },
		{ name: "Bing", url: "https://bing.com" },
		{ name: "Google", url: "https://google.com" },
		{ name: "Rust", url: "https://rust-lang.org" },
		{ name: "React", url: "https://reactjs.org" },
		{ name: "Vue", url: "https://vuejs.org" },
		{ name: "TypeScript", url: "https://typescript.org" },
	]);
	const [Add, SetAdd] = useState("");
	const [url, SetUrl] = useState("");
	return (
		<div>
			<div className="flex flex-col py-6 items-center text-center rounded-lg bg-slate-400/80 shadow-2xl px-8">
				<span
					className="hover:bg-slate-300/20 transition duration-500 bg-slate-600/80 rounded-full scale-150 flex items-center justify-center w-6 mr-4 h-6 my-2 self-end"
					onClick={close}
				>
					<AiOutlineClose />
				</span>
				<h1 className="text-4xl font-bold text-slate-800/80">快捷方式</h1>
				<div className="flex items-center">
					<div className="flex flex-col">
						<input
							value={Add}
							onChange={(e) => SetAdd(e.target.value)}
							placeholder="set Name here"
							className="mb-8 mt-6 text-slate-400 font-bold w-128 h-16 bg-slate-800/30 rounded-2xl p-4"
						/>
						<div className="flex justify-around w-128 								text-slate-400 font-bold  h-16 bg-slate-800/30 rounded-2xl p-4 outline-none">
							<select name="first_urls" className="bg-transparent outline-none">
								<option value="urlf1">https://</option>
								<option value="urlf2">http://</option>
								<option value="urlf3">localhost:</option>
								<option value="urlf4">none</option>
							</select>
							<input
								className="m-2  bg-transparent outline-none"
								value={url}
								onChange={(e) => SetUrl(e.target.value)}
								placeholder="set Url here"
							/>
							<select name="last_urls" className="bg-transparent outline-none">
								<option value="urll1">.com</option>
								<option value="urll2">.cn</option>
								<option value="urll3">.hk</option>
								<option value="urll4">none</option>
							</select>
						</div>
					</div>
					<span
						onClick={() => setApps([...Apps, { name: Add, url: url }])}
						className="bg-slate-800/30 mx-6 p-4 rounded-full transition duration-500 hover:scale-150 mr-4"
					>
						<AiOutlinePlus />
					</span>
				</div>

				<div className="p-4 flex justify-center items-center flex-wrap">
					{Apps.map((x) => (
						/* {[1, 2].map((x) => (
							<span className="flex justify-center items-center w-256 h-32 font-bold bg-gray-700 text-2xl text-center text-gray-400 p-2 px-8 rounded-lg m-4">
								{Apps[`${y}${x}`]}
							</span>
						))} */
						<span
							onClick={() => {
								window.location.href = x.url;
							}}
							className="duration-500 hover:drop-shadow-2xl hover:bg-slate-400/80 hover:text-black hover:scale-125 transition w-1/3 flex justify-center items-center w-256 h-32 font-bold bg-gray-700 text-2xl text-center text-gray-400 p-2 px-8 rounded-lg m-6"
						>
							{x.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
