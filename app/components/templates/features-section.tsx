import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bath, DoorOpen, Lightbulb, PaintBucket, Ruler, Wrench } from 'lucide-react'

const features = [
	{
		icon: Bath,
		title: 'Bathroom Fixtures',
		description: 'Elegant and durable fixtures for your dream bathroom.'
	},
	{
		icon: DoorOpen,
		title: 'Luxury Doors',
		description: 'Exquisite doors that make a statement in any home.'
	},
	{
		icon: Lightbulb,
		title: 'Electrical Wiring',
		description: 'High-quality wiring solutions for modern homes.'
	},
	{
		icon: PaintBucket,
		title: 'Premium Finishes',
		description: 'Top-grade paints and finishes for a perfect look.'
	},
	{
		icon: Ruler,
		title: 'Custom Measurements',
		description: 'Tailored solutions to fit your unique space.'
	},
	{
		icon: Wrench,
		title: 'Expert Installation',
		description: 'Professional installation services for all our products.'
	}
]

export default function FeaturesSection() {
	return (
		<section className='w-full py-12 bg-gray-50'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl font-bold text-center mb-8'>Our Premium Offerings</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{features.map((feature, index) => (
						<Card key={index} className='bg-white'>
							<CardHeader>
								<feature.icon className='w-10 h-10 mb-2 text-primary' />
								<CardTitle>{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
