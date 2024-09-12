import React from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// Define the structure of a cart item
interface CartItem {
	id: string
	name: string
	price: number
	quantity: number
	image: string
}

// Mock data for cart items
const cartItems: CartItem[] = [
	{
		id: '1',
		name: 'Luxury Gold-Plated Faucet',
		price: 599.99,
		quantity: 1,
		image: '/placeholder.svg?height=100&width=100'
	},
	{
		id: '2',
		name: 'Smart LED Bathroom Mirror',
		price: 799.99,
		quantity: 2,
		image: '/placeholder.svg?height=100&width=100'
	},
	{
		id: '3',
		name: 'Mahogany Double Door Set',
		price: 1299.99,
		quantity: 1,
		image: '/placeholder.svg?height=100&width=100'
	},
	{
		id: '4',
		name: 'Premium Copper Electrical Wiring Kit',
		price: 249.99,
		quantity: 3,
		image: '/placeholder.svg?height=100&width=100'
	}
]

export default function Cart() {
	const [items, setItems] = React.useState<CartItem[]>(cartItems)

	const updateQuantity = (id: string, increment: number) => {
		setItems((prevItems) =>
			prevItems
				.map((item) =>
					item.id === id ? { ...item, quantity: Math.max(0, item.quantity + increment) } : item
				)
				.filter((item) => item.quantity > 0)
		)
	}

	const removeItem = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id))
	}

	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
	const tax = subtotal * 0.08 // Assuming 8% tax
	const total = subtotal + tax

	return (
		<Card className='w-full max-w-4xl mx-auto'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold'>Your Cart</CardTitle>
			</CardHeader>
			<CardContent className='grid gap-6'>
				{items.map((item) => (
					<div key={item.id} className='flex items-center space-x-4'>
						<Image
							src={item.image}
							alt={item.name}
							width={100}
							height={100}
							className='rounded-md'
						/>
						<div className='flex-1'>
							<h3 className='font-semibold'>{item.name}</h3>
							<p className='text-sm text-gray-500'>${item.price.toFixed(2)}</p>
						</div>
						<div className='flex items-center space-x-2'>
							<Button variant='outline' size='icon' onClick={() => updateQuantity(item.id, -1)}>
								<MinusIcon className='h-4 w-4' />
							</Button>
							<span className='w-8 text-center'>{item.quantity}</span>
							<Button variant='outline' size='icon' onClick={() => updateQuantity(item.id, 1)}>
								<PlusIcon className='h-4 w-4' />
							</Button>
						</div>
						<Button variant='destructive' size='icon' onClick={() => removeItem(item.id)}>
							<TrashIcon className='h-4 w-4' />
						</Button>
					</div>
				))}
			</CardContent>
			<Separator className='my-4' />
			<CardFooter className='flex flex-col space-y-4'>
				<div className='flex justify-between w-full'>
					<span>Subtotal</span>
					<span>${subtotal.toFixed(2)}</span>
				</div>
				<div className='flex justify-between w-full'>
					<span>Tax (8%)</span>
					<span>${tax.toFixed(2)}</span>
				</div>
				<div className='flex justify-between w-full text-lg font-bold'>
					<span>Total</span>
					<span>${total.toFixed(2)}</span>
				</div>
				<Button className='w-full mt-4' size='lg'>
					Proceed to Checkout
				</Button>
			</CardFooter>
		</Card>
	)
}
