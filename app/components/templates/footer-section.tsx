import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'react-feather'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
	return (
		<footer className='bg-gray-900 mt-12 w-full text-gray-300 py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div>
						<h2 className='text-2xl font-bold text-white mb-4'>LuxeHardware</h2>
						<p className='mb-4'>Elevating spaces with premium hardware solutions.</p>
						<div className='flex space-x-4'>
							<Link href='#' className='hover:text-white'>
								<Facebook size={24} />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link href='#' className='hover:text-white'>
								<Instagram size={24} />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link href='#' className='hover:text-white'>
								<Twitter size={24} />
								<span className='sr-only'>Twitter</span>
							</Link>
						</div>
					</div>

					{/* Product Categories */}
					<div>
						<h3 className='text-lg font-semibold text-white mb-4'>Our Products</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-white'>
									Bathroom Fixtures
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Luxury Doors
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Electrical Wiring
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Kitchen Hardware
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Smart Home Solutions
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className='text-lg font-semibold text-white mb-4'>Customer Service</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-white'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Shipping & Returns
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									FAQ
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Product Care
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-white'>
									Warranty Information
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div>
						<h3 className='text-lg font-semibold text-white mb-4'>Stay Updated</h3>
						<p className='mb-4'>
							Subscribe to our newsletter for exclusive offers and design inspiration.
						</p>
						<form className='flex flex-col space-y-2'>
							<Input
								type='email'
								placeholder='Enter your email'
								className='bg-gray-800 border-gray-700 text-white placeholder-gray-400'
							/>
							<Button type='submit' className='bg-primary hover:bg-primary/90'>
								Subscribe
							</Button>
						</form>
					</div>
				</div>

				{/* Copyright */}
				<div className='mt-8 pt-8 border-t border-gray-800 text-center'>
					<p>&copy; {new Date().getFullYear()} LuxeHardware. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
