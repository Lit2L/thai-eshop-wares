import Stripe from 'stripe'
import Product from './components/Product'
import HeroSection from './components/templates/hero-section'
import ProductSection from './components/templates/products-section'
import FeaturesSection from './components/templates/features-section'
import GallerySection from './components/templates/gallery-section'
import Footer from './components/templates/footer-section'

const getProducts = async () => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: '2022-11-15'
	})
	const products = await stripe.products.list()
	// Here we alter the products array to include the prices for each product as
	// well as the product information. The Promise.all() method allows us to run
	// all promises in parallel & wait for them to resolve before returning data.
	const productsWithPrices = await Promise.all(
		products.data.map(async (product) => {
			const prices = await stripe.prices.list({ product: product.id })
			const features = product.metadata.features || '' // extract features
			return {
				// ...product,
				// prices: prices.data,
				// 👇🏻 Alternatively we can structure the return object to only include:
				id: product.id,
				name: product.name,
				unit_amount: prices.data[0].unit_amount,
				image: product.images[0],
				currency: prices.data[0].currency,
				description: product.description,
				metadata: { features }
			}
		})
	)
	return productsWithPrices
}

export default async function HomePage() {
	const products = await getProducts()
	console.log('products: ', products)
	return (
		<main className='flex flex-col max-w-full items-center justify-center w-full min-h-screen'>
			<HeroSection />
			<ProductSection />
			<FeaturesSection />
			<GallerySection key={products.id} {...products} />
			<div className='grid gap-6 pb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
			<Footer />
		</main>
	)
}
