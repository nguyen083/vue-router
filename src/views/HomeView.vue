<script setup lang="ts">

</script>

<template>
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Website
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing content and services.
          </p>
          <Link href="/get-started" class-name="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Feature 1
              </h4>
              <p className="text-gray-600">
                Description of feature 1 goes here.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Feature 2
              </h4>
              <p className="text-gray-600">
                Description of feature 2 goes here.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Feature 3
              </h4>
              <p className="text-gray-600">
                Description of feature 3 goes here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
