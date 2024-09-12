import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Product {
	id: number
	name: string
	description: string
	imageUrl: string
}

const products: Product[] = [
	{
		id: 1,
		name: 'Elegant Faucet Set',
		description: 'Premium brass faucet with a sleek, modern design.',
		imageUrl: '/products/elegantfaucet.jpg'
	},
	{
		id: 2,
		name: 'Luxury Shower System',
		description: 'Multi-function shower system with rainfall and handheld options.',
		imageUrl: '/products/luxuryshower.jpg'
	},
	{
		id: 3,
		name: 'Solid Oak Door',
		description: 'Handcrafted solid oak door with intricate detailing.',
		imageUrl: '/products/elegantdoor.jpg'
	},
	{
		id: 4,
		name: 'Smart Electrical Panel',
		description: 'State-of-the-art electrical panel with smart home integration.',
		imageUrl: '/products/electricalpanels.jpg'
	}
]

export default function ProductSection() {
	return (
		<section className='w-full mx-auto py-12 md:py-24 lg:py-32 bg-gray-100'>
			<div className='container mx-auto  px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Our Premium Products</h2>
					<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
						Discover our curated selection of high-end hardware and fixtures, designed to elevate
						your home's aesthetics and functionality.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
					{products.map((product) => (
						<Card key={product.id} className='flex flex-col justify-between'>
							<CardHeader>
								<Image
									src={product.imageUrl}
									alt={product.name}
									width={200}
									height={200}
									className='w-full h-48 object-cover rounded-t-lg'
								/>
							</CardHeader>
							<CardContent>
								<CardTitle className='text-xl font-semibold mb-2'>{product.name}</CardTitle>
								<p className='text-gray-600 dark:text-gray-300'>{product.description}</p>
							</CardContent>
							<CardFooter>
								<Button className='w-full'>Shop Now</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
