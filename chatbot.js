// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ', Sou o rodrigo, SEJA BEM VINDO A BBC, como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Agendar um horário\n2 - Nossos serviços\n3 - planos mensais e anuais\n4 - Como aderir\n5 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 2 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nossa barbearia oferece uma experiência unica e totalmente exclusiva, com horário de funcionamento das 9h até as 22h, 7 dias por semana, podendo fazer seu agendamento pelo Whatsapp,oferecemos diversos serviços e planos para melhorar sua experiência aqui na BBC'

        ,await delay(3000)) //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Agendar um horário\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro e escolha um profissional da sua preferência para melhor atende-lo' 
        ,await delay(3000)) //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://www.trinks.com/bbclub-shopboulevard?fbclid=PAZXh0bgNhZW0CMTEAAaa67CJwz_YfVZV1mhALGjfhbU4I9Aa4Y1M0-VPDmnasJVG_lruOLNU_5to_aem_fZ_B1P4aONhd5OWNhaa3Tg');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from,'Corte: Corte de cabelo preciso e sofisticado.\n\n Barba: Modelagem e acabamento da barba para um visual elegante.\n\n Corte|Barba: Corte de cabelo e barba combinados, criando um visual harmônico.\n\n Sobrancelha: Ajuste preciso para realçar o olhar.\n\n Acabamento: Detalhamento para alinhar e corrigir contornos do corte ou barba.\n\n Camuflagem de barba: Tonalização para dar densidade e uniformizar a barba.\n\n Camuflagem de cabelo: Tonalização de fios brancos, mantendo um visual natural.\n\n Depilação nariz|orelha: Remoção de pelos do nariz e orelhas.\n\n Selagem: Tratamento capilar para controlar o frizz e dar brilho.\n\n Limpeza de pele: Remoção de impurezas e revitalização da pele.\n\n Cone hindu: Terapia para limpar o canal auditivo e aliviar tensões.\n\n Platinado: Descoloração para cabelo platinado.\n\n Luzes: Técnica para iluminar o cabelo e realçar a textura.')
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://www.trinks.com/bbclub-shopboulevard?fbclid=PAZXh0bgNhZW0CMTEAAaa67CJwz_YfVZV1mhALGjfhbU4I9Aa4Y1M0-VPDmnasJVG_lruOLNU_5to_aem_fZ_B1P4aONhd5OWNhaa3Tg');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Planos mensais e anuais:\n\n 3-serviços R$230,00.\n\n 4-serviços R$290,00.\n\n 6-serviços R$420,00.\n\n 8-serviços R$540,00.\n\n 10-serviços R$800,00.\n\n 20-serviços R$1400,00')
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://www.trinks.com/bbclub-shopboulevard?fbclid=PAZXh0bgNhZW0CMTEAAaa67CJwz_YfVZV1mhALGjfhbU4I9Aa4Y1M0-VPDmnasJVG_lruOLNU_5to_aem_fZ_B1P4aONhd5OWNhaa3Tg');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode agendar um horário diretamente pelo nosso app ou pelo WhatsApp.')


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://www.trinks.com/bbclub-shopboulevard?fbclid=PAZXh0bgNhZW0CMTEAAaa67CJwz_YfVZV1mhALGjfhbU4I9Aa4Y1M0-VPDmnasJVG_lruOLNU_5to_aem_fZ_B1P4aONhd5OWNhaa3Tg');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://www.trinks.com/bbclub-shopboulevard?fbclid=PAZXh0bgNhZW0CMTEAAaa67CJwz_YfVZV1mhALGjfhbU4I9Aa4Y1M0-VPDmnasJVG_lruOLNU_5to_aem_fZ_B1P4aONhd5OWNhaa3Tg ');


    }








});