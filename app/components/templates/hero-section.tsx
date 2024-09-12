import { Button } from '@/components/ui/button'
import { ArrowRight, ShowerHead, DoorOpen, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
	return (
		<section className='relative h-[90vh] w-full'>
			<Image
				src='/products/faucetclean.jpg'
				alt='Luxury bathroom interior'
				width={1920}
				height={1080}
				className='absolute inset-0 object-cover w-full h-full'
				priority
			/>
			<div className='absolute inset-0 bg-black/50' />
			<div className='relative h-full flex flex-col justify-center items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
					Elevate Your Space with Premium Hardware
				</h1>
				<p className='text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl'>
					Discover exquisite bathroom fixtures, luxury doors, and superior electrical solutions for
					your distinguished home.
				</p>
				<div className='flex flex-col sm:flex-row gap-4'>
					<Button size='lg' className='bg-primary hover:bg-primary/90'>
						Explore Collection
						<ArrowRight className='ml-2 h-5 w-5' />
					</Button>
					<Button size='lg' variant='outline' className='bg-white/10 text-white hover:bg-white/20'>
						Book Consultation
					</Button>
				</div>
				<div className='mt-12 flex gap-8'>
					<div className='flex items-center text-white'>
						<ShowerHead className='h-8 w-8 mr-2' />
						<span className='text-sm'>Premium Fixtures</span>
					</div>
					<div className='flex items-center text-white'>
						<DoorOpen className='h-8 w-8 mr-2' />
						<span className='text-sm'>Luxury Doors</span>
					</div>
					<div className='flex items-center text-white'>
						<Zap className='h-8 w-8 mr-2' />
						<span className='text-sm'>Expert Wiring</span>
					</div>
				</div>
			</div>
		</section>
	)
}
