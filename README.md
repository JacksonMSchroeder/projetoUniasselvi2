🛡️ Portal Infância Segura
Projeto Acadêmico de Extensão – ADS Uniasselvi (Polo Saguaçu)
Este portal foi desenvolvido como parte das atividades extensionistas do curso de Análise e Desenvolvimento de Sistemas. O foco foi criar uma solução prática e funcional para a divulgação de direitos e localização de redes de proteção à criança e ao adolescente (ECA).

🔗 Deploy oficial: https://projeto-uniasselvi2.vercel.app

![Demonstração do Site](assets/projetin2.gif)

# Tecnologias e Descobertas
* **Swiper.js:** Utilizado para criar a linha do tempo horizontal. Escolhi essa biblioteca por ser mais performática e oferecer uma experiência de "scroll" mais natural em dispositivos móveis do que modelos de balões verticais.

* **Geolocalização Customizada:** Implementei uma busca dinâmica utilizando iframes do Google Maps. Isso permitiu oferecer um recurso de localização em tempo real para o usuário sem a necessidade de custos com API Keys, mantendo a viabilidade do projeto.

* **Arquitetura:** Organização limpa separando as responsabilidades entre HTML, CSS e a lógica de servidor/scripts.

* **Reponsividade Mobile/Desktop:** Acesso pode ser feito via mobile ou computado. 

# Diário de Bordo & Decisões de Design
O Dilema do Desenvolvedor: Estética vs. Utilidade
Durante o desenvolvimento, precisei decidir o nível de elementos visuais. Como este é um site de apoio e proteção, a prioridade foi a clareza e a velocidade de resposta.
Interface Enxuta: Diferente de um site de entretenimento, aqui o usuário pode estar em uma situação de estresse. O foco foi em botões de emergência grandes, links oficiais diretos e uma resposta rápida para quem precisa de ajuda imediata.

# Evolução de Fluxo: Sinto que meu ritmo de codificação dobrou neste quarto projeto. A estrutura de seções (header, main, section, footer) e a manipulação via CSS separado já se tornaram automáticas.

# Relatório de Troubleshooting (Lições Aprendidas)
Durante o processo, identifiquei e resolvi gargalos técnicos que serviram como grandes aprendizados de atenção aos detalhes:

* **Conflito de Referência de Scripts:** Problema: A busca no mapa parou de funcionar subitamente. Causa: Confundi os nomes dos arquivos entre projetos e chamei script.js no HTML, enquanto o arquivo correto era server.js. Solução: Revisão sistemática das chamadas no rodapé do documento. Ponto de atenção reforçado para padronização de nomenclatura.

* **Gestão de Caminhos (Assets):** Problema: Imagens da linha do tempo não renderizavam após o deploy. Causa: Erro na declaração do caminho relativo (assets/arquivo).
Solução: Correção da sintaxe e verificação de Case Sensitivity (diferença entre maiúsculas e minúsculas), garantindo que o servidor Vercel localize os arquivos corretamente.

* **Gerenciamento de Versionamento (Git):** Problema: Realizei um git push na branch principal do repositório incorreto durante a troca de contexto entre os dois projetos da faculdade.
Causa: Troca rápida de abas no terminal sem a verificação do diretório atual.
Solução: Tive que realizar o rollback e a organização manual dos dois repositórios simultaneamente.
Aprendizado: Implementei o hábito de sempre verificar o status do repositório (git status ou git branch) antes de qualquer comando de escrita/push, especialmente ao lidar com múltiplos projetos paralelos.


 ### Acadêmico: 
 Jackson Miranda Schroeder Análise e Desenvolvimento de Sistemas – Uniasselvi 2026
 * **Parceiria com instituição:** Á Procura. 

 # Referências e Links Oficiais
Entendi perfeitamente, Jackson! Você quer os links "crus" e completos (com o protocolo HTTPS) logo ao lado do nome do órgão, sem o texto clicável escondendo a URL. Isso é ótimo para documentação técnica.

Aqui está o bloco formatado para o seu README.md no VS Code:

# Referências e Links Oficiais

# Legislação e Órgãos Governamentais:
Estatuto da Criança e do Adolescente (ECA): https://www.planalto.gov.br/ccivil_03/leis/L8069compilado.htm

Ministério do Desenvolvimento e Assistência Social: https://www.gov.br/mds/pt-br

Disque 100 (Ouvidoria Nacional): https://www.gov.br/mdh/pt-br/ondh/

CONANDA (Resoluções Técnicas): https://www.gov.br/mdh/pt-br/acesso-a-informacao/participacao-social/conselho-nacional-dos-direitos-da-crianca-e-do-adolescente-conanda/resolucoes/resolucoes-1-a-99.pdf

# Linha do Tempo dos Direitos (Fontes de Pesquisa):
1927 (Código de Menores): https://mapa.an.gov.br/index.php/dicionario-primeira-republica/1165-legislacao-sobre-menores-na-primeira-republica

1959 (Declaração ONU): https://www.sinesp.org.br/quem-somos/legis/370-declaracao-universal-dos-direitos-da-crianca/1919-declaracao-dos-direitos-da-crianca-1959

1988 (Constituição Federal): https://prioridadeabsoluta.org.br/entenda-a-prioridade/

1990 (Histórico ECA): https://www.childhood.org.br/acoes-e-iniciativas/conselho-tutelar/

2012 (Eleição Unificada): https://mppr.mp.br/Pagina/Eleicoes-Unificadas-para-os-Conselhos-Tutelares

2014 (Lei Menino Bernardo): https://www.jusbrasil.com.br/artigos/lei-menino-bernardo/925423099

2015 (Marco Legal): https://andi.org.br/2015/01/marco-legal-da-primeira-infancia-e-um-passo-importante-para-o-avanco-nas-politicas-publicas-de-protecao-a-crianca/

2022 (Lei Henry Borel): https://revistaft.com.br/o-enfrentamento-da-violencia-contra-a-crianca-e-o-adolescente-apos-a-lei-n-14-344-2022-lei-henry-borel/

2024 (Saúde Mental): https://cj.estrategia.com/portal/alteracao-eca-atendimento-psicossocial/

2026 (SaferNet Digital): https://new.safernet.org.br/content/dia-da-internet-segura-2026-edicao-brasileira-discute-eca-digital-verificacao-etaria-online