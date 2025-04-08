import React, { memo } from 'react';
import { Popover, Select, Modal } from 'antd';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Toshpolat from '@imgs/me.png';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
	const { Option } = Select;
	const navigate = useNavigate();
	const { t } = useTranslation();
	const handleLanguageChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<div className="w-full min-h-[90px] p-6 border-b flex items-center justify-end  border-1 !border-b-[#E9ECEF]">
			<div className="flex w-fit items-center gap-4">
				<div className="w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-full border">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M18.3334 8.33335V10.8334C18.3334 14.1667 16.6667 15.8334 13.3334 15.8334H12.9167C12.6584 15.8334 12.4084 15.9584 12.2501 16.1667L11.0001 17.8334C10.4501 18.5667 9.55008 18.5667 9.00008 17.8334L7.75008 16.1667C7.61675 15.9834 7.30841 15.8334 7.08341 15.8334H6.66675C3.33341 15.8334 1.66675 15 1.66675 10.8334V6.66669C1.66675 3.33335 3.33341 1.66669 6.66675 1.66669H11.6667"
							stroke="#212529"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16.2501 5.83335C17.4007 5.83335 18.3334 4.90061 18.3334 3.75002C18.3334 2.59943 17.4007 1.66669 16.2501 1.66669C15.0995 1.66669 14.1667 2.59943 14.1667 3.75002C14.1667 4.90061 15.0995 5.83335 16.2501 5.83335Z"
							stroke="#212529"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13.3303 9.16667H13.3378"
							stroke="#212529"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.99632 9.16667H10.0038"
							stroke="#212529"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6.66209 9.16667H6.66957"
							stroke="#212529"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<div className="w-[1px] h-[42px] bg-[#E9ECEF] dark:bg-[#1C1C1E]" />

				<div className="w-[42px] h-[42px]  flex items-center justify-center cursor-pointer rounded-full border">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M10 5.36664V8.14164"
							stroke="#212529"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
						/>
						<path
							d="M10.0166 1.66669C6.94992 1.66669 4.46658 4.15002 4.46658 7.21669V8.96669C4.46658 9.53335 4.23325 10.3834 3.94158 10.8667L2.88325 12.6334C2.23325 13.725 2.68325 14.9417 3.88325 15.3417C7.86658 16.6667 12.1749 16.6667 16.1582 15.3417C17.2832 14.9667 17.7666 13.65 17.1582 12.6334L16.0999 10.8667C15.8082 10.3834 15.5749 9.52502 15.5749 8.96669V7.21669C15.5666 4.16669 13.0666 1.66669 10.0166 1.66669Z"
							stroke="#212529"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
						/>
						<path
							d="M12.7749 15.6833C12.7749 17.2083 11.5249 18.4583 9.99985 18.4583C9.24152 18.4583 8.54152 18.1416 8.04152 17.6416C7.54152 17.1416 7.22485 16.4416 7.22485 15.6833"
							stroke="#212529"
							stroke-width="1.5"
							stroke-miterlimit="10"
						/>
					</svg>
				</div>

				<Select
					defaultValue={i18n.language}
					onChange={handleLanguageChange}
					className="dark:bg-[#1C1C1E] dark:text-white mx-3"
					bordered={false}
					style={{ paddingInlineEnd: '8px' }}
					suffixIcon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								d="M15.023 7.14798L9.39804 12.773C9.3458 12.8253 9.28376 12.8668 9.21547 12.8951C9.14719 12.9234 9.07399 12.938 9.00007 12.938C8.92615 12.938 8.85295 12.9234 8.78466 12.8951C8.71638 12.8668 8.65434 12.8253 8.6021 12.773L2.9771 7.14798C2.87155 7.04243 2.81226 6.89927 2.81226 6.75001C2.81226 6.60074 2.87155 6.45759 2.9771 6.35204C3.08265 6.24649 3.2258 6.18719 3.37507 6.18719C3.52434 6.18719 3.66749 6.24649 3.77304 6.35204L9.00007 11.5798L14.2271 6.35204C14.2794 6.29978 14.3414 6.25832 14.4097 6.23004C14.478 6.20175 14.5512 6.18719 14.6251 6.18719C14.699 6.18719 14.7722 6.20175 14.8404 6.23004C14.9087 6.25832 14.9708 6.29978 15.023 6.35204C15.0753 6.4043 15.1168 6.46634 15.145 6.53463C15.1733 6.60291 15.1879 6.6761 15.1879 6.75001C15.1879 6.82392 15.1733 6.8971 15.145 6.96539C15.1168 7.03367 15.0753 7.09571 15.023 7.14798Z"
								fill="#212529"
							/>
						</svg>
					}
				>
					<Option value="uz">{t('UZ')}</Option>
					<Option value="en">{t('EN')}</Option>
					<Option value="ru">{t('RU')}</Option>
				</Select>

				<Popover
					content={
						<div className="w-64 py-2">
							<div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
								<div className="flex items-center space-x-3">
									<div className="select-none text-base dark:bg-[#1C1C1E] dark:text-white text-[#030712] font-bold leading-normal w-10 h-10 flex items-center justify-center bg-[#F6F7F9] rounded-full">
										<img
											src={Toshpolat}
											alt="me"
											className="w-full h-full object-cover rounded-full"
										/>
									</div>
									<div className="flex flex-col justify-start items-start gap-[0]">
										<p className="text-[16px]  text-[#212529] dark:text-white">
											Nurullayev T
										</p>
										<p className="text-[14px]  text-[#919191] dark:text-white">
											nta_edcom
										</p>
									</div>
								</div>
							</div>

							<div className="py-1 border-t border-gray-200 dark:border-gray-700">
								<a
									href="#"
									className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
									onClick={() => {
										Modal.confirm({
											title: t('Ishonchingiz komilmi?'),
											okText: t('Ha'),
											cancelText: t("Yo'q"),
											onOk: () => {
												localStorage.removeItem('token');
												navigate('/login');
											},
										});
									}}
								>
									<div className="flex items-center gap-2">
										<LogoutOutlined />
										{t('Chiqish')}
									</div>
								</a>
							</div>
						</div>
					}
					placement="bottomRight"
					trigger="click"
					overlayClassName="user-dropdown"
				>
					<div className="flex items-center gap-2 cursor-pointer">
						<div className="select-none text-base dark:bg-[#1C1C1E] dark:text-white text-[#030712] font-bold leading-normal w-12 h-12 flex items-center justify-center bg-[#F6F7F9] rounded-full active:scale-105">
							<img
								src={Toshpolat}
								alt="me"
								className="w-[42px] h-[42px] object-cover rounded-full"
							/>
						</div>
						<div className="flex flex-col justify-start items-start gap-[0]">
							<p className="text-[16px]  text-[#212529] dark:text-white">
								Nurullayev T
							</p>
							<p className="text-[14px]  text-[#919191] dark:text-white">
								nta_edcom
							</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								d="M15.023 7.14798L9.39804 12.773C9.3458 12.8253 9.28376 12.8668 9.21547 12.8951C9.14719 12.9234 9.07399 12.938 9.00007 12.938C8.92615 12.938 8.85295 12.9234 8.78466 12.8951C8.71638 12.8668 8.65434 12.8253 8.6021 12.773L2.9771 7.14798C2.87155 7.04243 2.81226 6.89927 2.81226 6.75001C2.81226 6.60074 2.87155 6.45759 2.9771 6.35204C3.08265 6.24649 3.2258 6.18719 3.37507 6.18719C3.52434 6.18719 3.66749 6.24649 3.77304 6.35204L9.00007 11.5798L14.2271 6.35204C14.2794 6.29978 14.3414 6.25832 14.4097 6.23004C14.478 6.20175 14.5512 6.18719 14.6251 6.18719C14.699 6.18719 14.7722 6.20175 14.8404 6.23004C14.9087 6.25832 14.9708 6.29978 15.023 6.35204C15.0753 6.4043 15.1168 6.46634 15.145 6.53463C15.1733 6.60291 15.1879 6.6761 15.1879 6.75001C15.1879 6.82392 15.1733 6.8971 15.145 6.96539C15.1168 7.03367 15.0753 7.09571 15.023 7.14798Z"
								fill="#212529"
							/>
						</svg>
					</div>
				</Popover>
			</div>
		</div>
	);
};

export default memo(Navbar);
