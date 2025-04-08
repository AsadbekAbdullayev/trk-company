import { useState } from 'react';
import backroundImage from '@imgs/login_img_with_flag.png';
import logo from '@icons/Logo_login.svg';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import { useLoginMutation } from '@/entities/auth/api';

const LoginPage = () => {
	const navigate = useNavigate();
	const { mutateAsync } = useLoginMutation();

	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const login = async () => {
		try {
			const response = await mutateAsync(credentials);
			console.log('Login response:', response);
			message.success('Tizimga kirish muvaffaqiyatli amalga oshirildi!');
			// localStorage.setItem('token', response.data.token); // Simulate token storage
			// navigate('/');
		} catch (error) {
			console.error('Login error:', error);
			message.error('Tizimga kirishda xatolik yuz berdi!');
		}
	};

	return (
		<div className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center">
			<img
				src={backroundImage}
				alt="Background with flags"
				className="absolute inset-0 w-full h-full object-cover "
			/>

			<div className="relative z-10 w-full max-w-xl mx-auto px-4">
				<div className="backdrop-blur-sm bg-white/70 rounded-2xl p-8 shadow-lg">
					<div className="flex justify-center mb-6">
						<img
							src={logo}
							alt="Company Logo"
							width={160}
							height={60}
							className="h-auto"
						/>
					</div>

					<h1 className="text-[#222] text-xl font-medium text-center mb-2">
						Tizimga kirish
					</h1>

					<p className="text-[#666666] text-sm text-center mb-6">
						Tizimga kirish uchun login hamda parolingizni kiriting
					</p>

					<div className="space-y-4">
						<input
							type="text"
							placeholder="Login"
							name="username"
							value={credentials.username}
							onChange={onChange}
							className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023e8a]/20"
						/>

						<PasswordInput
							name="password"
							value={credentials.password}
							onChange={onChange}
						/>

						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									id="remember"
									className="w-4 h-4 rounded border-[#023e8a] text-[#023e8a] focus:ring-[#023e8a]/20"
								/>
								<label htmlFor="remember" className="text-sm text-[#fff]">
									Eslab qolish
								</label>
							</div>

							<a href="#" className="text-sm text-[#fff] hover:underline">
								Parolni unutdingizmi?
							</a>
						</div>

						<Button
							disabled={!credentials.username || !credentials.password}
							onClick={login}
							className="w-full h-[50px] bg-[#023e8a] hover:bg-[#023e8a]/90 text-white py-3 rounded-md font-medium text-[18px]"
						>
							Kirish
						</Button>
					</div>

					<div className="mt-8">
						<p className="text-center text-[#fff] mb-4">
							Boshqa kirish usullari
						</p>

						<div className="grid grid-cols-2 gap-4">
							<button
								type="button"
								className="flex items-center justify-center bg-white border border-gray-200 py-2.5 rounded-md hover:bg-gray-50"
							>
								<div className="flex items-center">
									<span className="text-[#54b646] font-bold">E</span>
									<span className="text-[#023e8a] font-bold">RI</span>
								</div>
							</button>

							<button
								type="button"
								className="flex items-center justify-center bg-[#4825c2] hover:bg-[#4825c2]/90 text-white py-2.5 rounded-md"
							>
								<span className="font-bold mr-1">ONE</span>
								<span className="bg-white text-[#4825c2] px-1 rounded font-bold">
									ID
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function PasswordInput({
	name,
	value,
	onChange,
}: {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="relative">
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder="Parol"
				name={name}
				value={value}
				onChange={onChange}
				className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-200 pr-10 focus:outline-none focus:ring-2 focus:ring-[#023e8a]/20"
			/>
			<button
				type="button"
				onClick={() => setShowPassword(!showPassword)}
				className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
			>
				{showPassword ? <EyeIcon /> : <EyeOffIcon />}
			</button>
		</div>
	);
}

function EyeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
			<circle cx="12" cy="12" r="3"></circle>
		</svg>
	);
}

function EyeOffIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
			<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
			<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
			<line x1="2" x2="22" y1="2" y2="22"></line>
		</svg>
	);
}

export default LoginPage;
