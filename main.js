// ======================= Módulos class
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordionTrigger');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const aulas = accordion.querySelector('.accordionAulas');
            const content = accordion.querySelector('.accordionContent');
            const icon = accordion.querySelector('.accordionIcon');
            const icon_faq = accordion.querySelector('.accordionIcon_faq');

            if (aulas) aulas.classList.toggle('hidden');
            if (content) content.classList.toggle('open');
            if (content) content.classList.toggle('pt-4');

            if (icon && icon.classList.contains('open')){
                icon.classList.remove("open");
                icon.classList.add("close");
            }else{
                icon.classList.remove("close");
                icon.classList.add("open");
            }

            if(icon_faq) icon_faq.classList.toggle("rotate-45");
        });
    });
});
// ======================= end Módulos class

// ======================= FAQ
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordionTrigger_faq');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const content = accordion.querySelector('.accordionContent_faq');
            const icon_faq = accordion.querySelector('.accordionIcon_faq');

            if (content) content.classList.toggle('open');
            if (content) content.classList.toggle('pt-4');

            if (icon_faq && icon_faq.classList.contains('open')){
                icon_faq.classList.remove("open");
                icon_faq.classList.add("close");
            }else{
                icon_faq.classList.remove("close");
                icon_faq.classList.add("open");
            }

            if(icon_faq) icon_faq.classList.toggle("rotate-45");
            if(icon_faq) icon_faq.classList.toggle("!text-[red]");
        });
    });
});