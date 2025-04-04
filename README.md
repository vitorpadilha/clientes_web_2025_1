# clientes_web_2025_1
## Comando para iniciar um projeto node
>npm init

## Comando para instalar um pacote

>npm install nome_do_pacote@versao

ou 

>npm i nome_do_pacote@versao

>[!NOTE]
>O @versao pode ser suprimido e com isso baixará a última versão do projeto disponível em https://www.npmjs.com/

>[!TIP]
>Por Exemplo: o comando ***npm i typescript*** baixará a última versão do typescript disponível em https://www.npmjs.com/package/typescript?activeTab=versions

## TypeScript

### Inicializar o projeto TypeScript
>npx tsc --init

### Configurar o projeto TypeScript

Será criado um arquivo tsconfig.json que terá todas as configurações do typescript.

>[!TIP]
> Edite a propriedade **"outDir"** para apontar para um diretório diferente (*dist*, por exemplo). Com isso, ficará ***"outDir" => "./dist/"***

### Transcrever códico em TypeScript para JavaScript

>npx tsc

>[!NOTE]
>Os arquivos JavaScripts serão gerados a partir dos TypeScript do projeto no caminho apontado pela propriedade **outDir** do tsconfig.json.
