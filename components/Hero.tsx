export default function Hero() {
  return (
    <div className="relative bg-white pb-12">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-8 sm:flex lg:mt-4">
              <div className="relative rounded-full py-2 px-6 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Empowering and protecting vulnerable youth and families in Washington State{' '}
                <a href="#" className="whitespace-nowrap font-semibold text-primary-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-6xl">
              Making a Difference in Our Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide education, advocacy, and support services to prevent fentanyl overdose, reduce violence, end trafficking, and promote mental health and housing stability. Our focus is on connecting those in need with support and advocacy to gain stability.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Donate Now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Our Programs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-4 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-100 to-white opacity-70 blur-3xl transform scale-110"></div>
            <img
              alt="Community support"
              src="/sawyer.jpg"
              className="relative w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}