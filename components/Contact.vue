<template>
<section class="py-10">
    <div class="container mx-auto">
        <h2 class="text-3xl mb-2.5">İletişim</h2>
        <p class="mb-5">Bize mesaj gönderin, en kısa sürede dönüş yapacağız!</p>
        <form action="https://formspree.io/f/xgvalrwe" id="contact-form">
            <div class="mb-3.75">
                <label for="name" class="block font-bold">Adınız</label>
                <input type="text" id="name" name="name" required placeholder="Adınızı girin" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black">
            </div>
            <div class="mb-3.75">
                <label for="email" class="block font-bold">E-posta</label>
                <input type="email" id="email" name="email" required placeholder="E-postanızı girin" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black">
            </div>
            <div class="mb-3.75">
                <label for="message" class="block font-bold">Mesajınız</label>
                <textarea id="message" name="message" required placeholder="Mesajınızı yazın" rows="4" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black"></textarea>
            </div>
            <button type="submit" class="bg-[#4caf50] text-white px-5 py-3 border-none rounded-md cursor-pointer transition-colors">Gönder</button>
        </form>
    </div>
</section>
</template>