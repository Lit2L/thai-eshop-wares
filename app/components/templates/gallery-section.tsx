'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lightbulb, Droplet, DoorOpen } from 'lucide-react'
import { useCartStore } from '@/zustand/store'
import { useState } from 'react'
import { AddCartType } from '@/types/AddCartType'

interface Product {
	id: number
	name: string
	category: 'Bathroom' | 'Doors' | 'Electrical'
	price: number
	description: string
	image: string
}

const products: Product[] = [
	{
		id: 1,
		name: 'Luxe Gold Faucet',
		category: 'Bathroom',
		price: 599.99,
		description: '24k gold-plated faucet with crystal accents',
		image: '/products/goldenshower.jpg'
	},
	{
		id: 2,
		name: 'Smart Bidet Toilet',
		category: 'Bathroom',
		price: 1299.99,
		description: 'Voice-controlled bidet with heated seat and air dryer',
		image: '/products/cornertub.jpeg'
	},
	{
		id: 3,
		name: 'Mahogany French Doors',
		category: 'Doors',
		price: 2499.99,
		description: 'Hand-carved mahogany French doors with beveled glass',
		image: '/products/doors.jpeg'
	},
	{
		id: 4,
		name: 'Smart Light Switch',
		category: 'Electrical',
		price: 79.99,
		description: 'Wi-Fi enabled touch-sensitive light switch with voice control',
		image: '/products/lightswitch1.jpg'
	},
	{
		id: 5,
		name: 'Rainfall Shower Head',
		category: 'Bathroom',
		price: 349.99,
		description: 'Oversized stainless steel rainfall shower head with LED lights',
		image: '/products/marble.jpg'
	},
	{
		id: 6,
		name: 'Sliding Barn Door',
		category: 'Doors',
		price: 899.99,
		description: 'Rustic sliding barn door with premium steel hardware',
		image: '/products/barn.jpeg'
	}
]

const getCategoryIcon = (category: Product['category']) => {
	switch (category) {
		case 'Bathroom':
			return <Droplet className='h-4 w-4' />
		case 'Doors':
			return <DoorOpen className='h-4 w-4' />
		case 'Electrical':
			return <Lightbulb className='h-4 w-4' />
	}
}

export default function GallerySection({ id, name, image, unit_amount, quantity }: AddCartType) {
	const [added, setAdded] = useState(false)
	const cartStore = useCartStore()
	const handleAddToCart = () => {
		cartStore.addProduct({ id, name, image, unit_amount, quantity })
		setAdded(true)
		setTimeout(() => {
			setAdded(false)
		}, 1000)
	}
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-2'>Luxury Hardware Essentials</h1>
			<p className='text-xl text-muted-foreground mb-8'>
				Elevate your space with our premium fixtures and fittings
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map((product) => (
					<Card key={product.id} className='flex flex-col'>
						<CardHeader>
							<img
								src={product.image}
								alt={product.name}
								className='w-full h-48 object-cover mb-4 rounded-md'
							/>
							<CardTitle>{product.name}</CardTitle>
							<CardDescription>{product.description}</CardDescription>
						</CardHeader>
						<CardContent className='flex-grow'>
							<Badge variant='secondary' className='mb-2 flex items-center gap-1 w-fit'>
								{getCategoryIcon(product.category)}
								{product.category}
							</Badge>
							<p className='text-2xl font-bold'>${product.price.toFixed(2)}</p>
						</CardContent>
						<CardFooter>
							<button onClick={handleAddToCart} className='w-full btn'>
								Add to Cart
							</button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
