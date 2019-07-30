<template>
	<div class="overflow-x-hidden border-gray-200">
		<div class="features container-inner mx-auto text-xl pb-16 relative">
			<h2 class="heading" id="features">Features</h2>

			<div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
				<svg width="170px" height="170px">
					<use xlink:href="#dots-triangle" />
				</svg>
			</div>

			<div class="flex items-center justify-center flex-col md:flex-row md:items-stretch">
				<div class="w-full max-w-lg md:w-1/3 px-4">
					<div
						class="card flex flex-col h-full bg-secondary items-center text-center shadow-xl rounded-lg px-4 py-5"
					>
						<svg class="fill-current text-tertiary w-10 h-10" id="leaf" viewBox="0 0 24 24">
							<path
								d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
							/>
						</svg>
						<h3 class="my-3 font-bold">Beauty</h3>
						<p
							class="text-base"
						>I adhere to modern design patterns so all of my sites are gorgeous and responsive!</p>
					</div>
				</div>

				<div class="w-full max-w-lg md:w-1/3 px-4">
					<div
						class="card flex flex-col h-full bg-secondary items-center text-center shadow-xl rounded-lg px-4 py-5"
					>
						<svg class="fill-current text-tertiary w-10 h-10" id="speedometer" viewBox="0 0 24 24">
							<path
								d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z"
							/>
						</svg>
						<h3 class="my-3 font-bold">Performance</h3>
						<p class="text-base">
							I build sites that are blazingly 🔥 fast!
							<a href="https://jamstack.org/">JAMstack</a> is my go-to, so my sites are silly performant.
						</p>
					</div>
				</div>

				<div class="w-full max-w-lg md:w-1/3 px-4">
					<div
						class="card flex flex-col h-full bg-secondary items-center text-center shadow-xl rounded-lg px-4 py-5"
					>
						<svg class="fill-current text-tertiary w-10 h-10" id="gear" viewBox="0 0 24 24">
							<path
								d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
							/>
						</svg>
						<h3 class="my-3 font-bold">Functionality</h3>
						<p
							class="text-base"
						>I implement a dedicated dashboard to help make it super easy to manage your content.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	transition: transform 0.3s;
}

.card:hover {
	transform: translateY(-5px);
}
</style>