import { Link } from "react-router-dom"
import { styles } from "../util/style"
import logo from "../assets/logo.uz.png"

function Footer() {
	return (
		<footer className={`${styles.container} bg-mainBg`}>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link
							to='/'
							className='flex flex-col gap-y-10 justify-start items-start'
						>
							<div className='flex items-center justify-start'>
								<img
									src={logo}
									className='h-10 rounded-full object-cover mr-3'
									alt='FlowBite Logo'
								/>
								<span className='self-center text-2xl font-semibold whitespace-nowrap'>
									Orginal Uz
								</span>
							</div>
							<div className='sm:flex-row flex flex-col gap-4 '>
								<a
									href='#'
									class='w-full sm:w-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
								>
									<svg
										class='mr-3 w-7 h-7'
										aria-hidden='true'
										focusable='false'
										data-prefix='fab'
										data-icon='google-play'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path
											fill='currentColor'
											d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
										></path>
									</svg>
									<div class='text-left'>
										<div class='mb-1 text-xs'>Download on the</div>
										<div class='-mt-1 font-sans text-sm font-semibold'>
											Mac App Store
										</div>
									</div>
								</a>
								<a
									href='#'
									class='w-full sm:w-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
								>
									<svg
										class='mr-3 w-7 h-7'
										aria-hidden='true'
										focusable='false'
										data-prefix='fab'
										data-icon='google-play'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path
											fill='currentColor'
											d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
										></path>
									</svg>
									<div class='text-left'>
										<div class='mb-1 text-xs'>Get in on</div>
										<div class='-mt-1 font-sans text-sm font-semibold'>
											Google Play
										</div>
									</div>
								</a>
							</div>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
								Resources
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Home
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Category
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Product
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
								HELP CENTER
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Discord Server
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Facebook
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
								Legal
							</h2>
							<ul className='text-gray-500  font-medium'>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Privacy Policy
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Licensing
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2023{' '}
						<Link to='/' className='hover:underline'>
							OrginalUz
						</Link>
						. All Rights Reserved.
					</span>
					<div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<svg
								className='w-4 h-4'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 8 19'
							>
								<path
									fillRule='evenodd'
									d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
									clipRule='evenodd'
								/>
							</svg>
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-telegram'
								viewBox='0 0 16 16'
							>
								{' '}
								<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' />{' '}
							</svg>
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<svg
								className='w-4 h-4'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 17'
							>
								<path
									fillRule='evenodd'
									d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
									clipRule='evenodd'
								/>
							</svg>
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-youtube'
								viewBox='0 0 16 16'
							>
								{' '}
								<path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />{' '}
							</svg>
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-instagram'
								viewBox='0 0 16 16'
							>
								{' '}
								<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />{' '}
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer