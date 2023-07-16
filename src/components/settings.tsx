import { AiOutlineClose } from "react-icons/ai";
import "../assets/stylesheet/index.css";
import { useState } from "react";

export default function ({ close }: any) {
	const [DarkModeChange, setDarkModeChange] = useState(false);
	const [IsLogin, setIsLogin] = useState(false);
	return (
		<div>
			<div className="flex flex-col py-6 text-center rounded-lg bg-slate-400/80 shadow-2xl px-8 items-center">
				<span
					className="hover:bg-slate-300/20 transition duration-500 bg-slate-600/80 rounded-full scale-150 flex items-center justify-center w-6 mr-4 h-6 my-2 self-end"
					onClick={close}
				>
					<AiOutlineClose />
				</span>
				<h1 className="text-4xl font-bold text-slate-800/80">设置</h1>
				<div className="m-4 w-full flex justify-between">
					<h1 className="text-2xl self-start ml-8 font-bold text-slate-800/80">登录</h1>
					<span
						onClick={() => setIsLogin(!IsLogin)}
						className={` flex ${IsLogin ? `justify-end` : ``} w-16 bg-slate-600 mr-8 rounded-full`}
					>
						<span className={`w-8 ${IsLogin ? `bg-green-200/80` : `bg-slate-400`} rounded-full`} />
					</span>
				</div>
				<h1 className="text-2xl self-start ml-8 font-bold text-slate-800/80">背景选择</h1>
				{[1, 2, 3].map((y) => (
					<div className="p-4 flex">
						{[1, 2].map((x) => (
							<span className="w-256 h-32 flex justify-center items-center text-xl font-semibold transition duration-500 hover:scale-110 bg-gray-700 text-gray-400 p-2 px-8 rounded-lg m-4">
								This is a background image
							</span>
						))}
					</div>
				))}
				<div className="w-full flex justify-between">
					<h1 className="text-2xl self-start ml-8 font-bold text-slate-800/80">深色模式</h1>
					<span
						onClick={() => setDarkModeChange(!DarkModeChange)}
						className={` flex ${DarkModeChange ? `justify-end` : ``} w-16 bg-slate-600 mr-8 rounded-full`}
					>
						<span className={`w-8 ${DarkModeChange ? `bg-green-200/80` : `bg-slate-400`} rounded-full`} />
					</span>
				</div>
				<div className="w-full flex justify-between pt-8">
					<h1 className="text-2xl self-start ml-8 font-bold text-slate-800/80">当前版本</h1>
					<span
						className={`text-center items-center justify-center font-bold text-blue-200 flex w-16 bg-slate-600 mr-8 rounded-full`}
					>
						0.1.1
					</span>
				</div>
			</div>
		</div>
	);
}
