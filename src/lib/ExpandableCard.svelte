<script>
    import { twMerge } from 'tailwind-merge';
    export let title = "Title";
    export let subtitle = "Subtitle";
    export let img = "img/quantexa.svg";
    export let classes = "";
</script>

<article class={twMerge("flex flex-col rounded-xl bg-cyan-950 w-full p-4 gap-8 hover:gap-9 h-80 shadow-2xl", classes)}>
    <div class="flex-none">
        <h1 class="text-3xl">{title}</h1>
        <span>{subtitle}</span>
    </div>

    <div class="fl"></div>
    <img src={img} alt="Quantexa logo" class="h-36 object-scale-down fill-white"/>
    
</article>