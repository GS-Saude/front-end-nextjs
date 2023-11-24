# OBSERVAÇÃO PARA O USO ADEQUADO DO FRONT END
> #### CASO FOREM TESTAR EM OUTRO BANCO, PRECISAM POPULAR ESSAS TABELAS PRA FUNCIONAR
```
T_VB_BIOTIPO
T_VB_DIETA
T_VB_TREINO
T_VB_TP_TREINO
T_VB_EXERC


# APENAS EXECUTAR ESSES COMANDOS PARA POPULAR O BANCO E FUNCIONAR A APLICAÇÃO
# APENAS EXECUTAR ESSES COMANDOS PARA POPULAR O BANCO E FUNCIONAR A APLICAÇÃO


INSERT INTO T_VB_BIOTIPO VALUES(1, 'Ectomorfo', 'Um indivíduo ectomorfo é um biótipo corporal caracterizado por características físicas específicas, como uma estrutura corporal magra, longilínea e geralmente com membros mais compridos em relação ao tronco. Pessoas com esse tipo de constituição tendem a ter metabolismo acelerado, o que pode dificultar o ganho de peso e massa muscular. Apesar de apresentarem uma aparência magra, os ectomorfos podem ter dificuldade em desenvolver músculos devido à sua tendência natural de queimar calorias rapidamente. Esse biótipo é um dos três principais classificados pelo sistema somatotipo, que inclui também os tipos mesomorfo e endomorfo.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_BIOTIPO VALUES(2, 'Mesomorfo', 'Um indivíduo mesomorfo é caracterizado por um biótipo corporal que exibe uma estrutura física atlética e musculosa. Pessoas com essa constituição tendem a ter ombros largos, uma cintura estreita e uma capacidade natural para desenvolver músculos de maneira mais eficiente do que outros somatotipos. O metabolismo do mesomorfo é geralmente mais acelerado do que o do endomorfo, mas não tão rápido quanto o do ectomorfo. Isso significa que eles podem ganhar e perder peso com relativa facilidade, além de ter uma predisposição para manter um percentual de gordura corporal mais baixo.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_BIOTIPO VALUES(3, 'Endomorfo', 'O endomorfo é um dos três principais somatotipos e é caracterizado por uma constituição corporal com tendência ao acúmulo de gordura e uma estrutura mais arredondada. Indivíduos endomorfos geralmente têm uma proporção maior de gordura corporal em relação à massa muscular, o que pode tornar o controle de peso mais desafiador. Suas características físicas incluem frequentemente uma distribuição de gordura mais uniforme, com membros e tronco com formas mais arredondadas. O metabolismo dos endomorfos tende a ser mais lento, o que significa que eles podem ter uma propensão para ganhar peso com mais facilidade do que outros somatotipos.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);


INSERT INTO T_VB_DIETA VALUES(1, 'Emagrecimento', '{
  "dieta_emagrecimento": {"cafe_da_manha": [{"opcao": "Omelete de claras","calorias": 250,"proteinas": 30,"gorduras": 10,"carboidratos": 10},{"opcao": "Mingau de aveia","calorias": 300,"proteinas": 10,"gorduras": 6,"carboidratos": 50},{"opcao": "Iogurte grego","calorias": 200,"proteinas": 20,"gorduras": 8,"carboidratos": 15}],"lanche_da_manha": [{"opcao": "Amêndoas","calorias": 150,"proteinas": 6,"gorduras": 12,"carboidratos": 5},{"opcao": "Fruta","calorias": 0,"proteinas": 0,"gorduras": 0,"carboidratos": 0},{"opcao": "Smoothie","calorias": 150,"proteinas": 5,"gorduras": 3,"carboidratos": 30}],"almoco": [ {"opcao": "Frango com quinoa","calorias": 400,"proteinas": 30,"gorduras": 10,"carboidratos": 50},{"opcao": "Salada de atum","calorias": 300,"proteinas": 20,"gorduras": 15,"carboidratos": 20},{"opcao": "Wrap integral","calorias": 350,"proteinas": 25,"gorduras": 12,"carboidratos": 40}],"lanche_da_tarde": [{"opcao": "Cenoura com homus","calorias": 100,"proteinas": 3,"gorduras": 7,"carboidratos": 10},{"opcao": "Uvas com queijo cottage","calorias": 150,"proteinas": 8,"gorduras": 5,"carboidratos": 20},{"opcao": "Iogurte com chia","calorias": 200,"proteinas": 10,"gorduras": 8,"carboidratos": 20}],"jantar": [{"opcao": "Salmão com batata-doce","calorias": 450,"proteinas": 30,"gorduras": 15,"carboidratos": 40},{"opcao": "Stir-fry com tofu","calorias": 350,"proteinas": 20,"gorduras": 15,"carboidratos": 30},{"opcao": "Frango com abobrinha e quinoa", "calorias": 400,"proteinas": 25,"gorduras": 10,"carboidratos": 50}]}
}', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);

INSERT INTO T_VB_DIETA VALUES(2, 'Ganho de Músculo', '{
  "dieta_musculo": {"cafe_da_manha": [{"opcao": "Ovos mexidos com queijo e espinafre","calorias": 400,"proteinas": 30,"gorduras": 25,"carboidratos": 15},{"opcao": "Aveia com banana e amêndoas","calorias": 450,"proteinas": 15,"gorduras": 20,"carboidratos": 60},{"opcao": "Iogurte grego com granola e mel","calorias": 350,"proteinas": 25,"gorduras": 15,"carboidratos": 30}],"lanche_da_manha": [{"opcao": "Shake de proteína com leite e banana","calorias": 300,"proteinas": 35,"gorduras": 8,"carboidratos": 25},{"opcao": "Muffin de aveia e proteína", "calorias": 250,"proteinas": 20,"gorduras": 12,"carboidratos": 20},{"opcao": "Iogurte com amendoim e mel","calorias": 200,"proteinas": 15,"gorduras": 10,"carboidratos": 15}],"almoco": [{"opcao": "Peito de frango grelhado com batata-doce","calorias": 600,"proteinas": 40,"gorduras": 10,"carboidratos": 80},{"opcao": "Arroz integral com carne magra moída","calorias": 550,"proteinas": 30,"gorduras": 15,"carboidratos": 70},{"opcao": "Salmão assado com quinoa","calorias": 700,"proteinas": 45,"gorduras": 30,"carboidratos": 50}], "lanche_da_tarde": [ {"opcao": "Amendoim ou castanhas","calorias": 250,"proteinas": 10,"gorduras": 20,"carboidratos": 15}, {"opcao": "Barra de proteína","calorias": 200,"proteinas": 20,"gorduras": 8,"carboidratos": 15}, {"opcao": "Iogurte com frutas e granola", "calorias": 300,"proteinas": 18,"gorduras": 12,"carboidratos": 25}],"jantar": [{"opcao": "Bife de contrafilé com batata assada","calorias": 700,"proteinas": 45,"gorduras": 35,"carboidratos": 40},{"opcao": "Macarrão integral com frango desfiado","calorias": 600,"proteinas": 35,"gorduras": 20,"carboidratos": 75},{"opcao": "Omelete recheado com queijo e vegetais", "calorias": 500, "proteinas": 30, "gorduras": 25, "carboidratos": 20}]}
}', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);


INSERT INTO T_VB_TREINO VALUES(1, 'Iniciante', 'Programa de treino ideal para iniciantes, com foco em exercícios fundamentais para desenvolver força e resistência. Este treino é projetado para quem está começando a jornada fitness e busca uma introdução equilibrada aos exercícios.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TREINO VALUES(2, 'Intermediário', 'Treino destinado aos praticantes de nível intermediário, com uma combinação de exercícios mais avançados e intensidade moderada. Este programa visa consolidar ganhos iniciais, promovendo maior resistência e definição muscular.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TREINO VALUES(3, 'Avançado', 'Treino avançado projetado para atletas experientes em busca de desafios mais intensos. Com uma variedade de exercícios avançados e métodos de treino especializados, este programa visa levar os praticantes ao seu auge físico, proporcionando força, potência e definição excepcionais.', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);


INSERT INTO T_VB_TP_TREINO VALUES(1, 1, 'Foco em Superiores', 'Treino direcionado para o desenvolvimento do peitoral, com ênfase em exercícios e técnicas para aprimorar a força e a definição dessa região muscular', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(2, 1, 'Foco em Inferiores', 'Treino dedicado ao fortalecimento dos músculos das pernas, utilizando exercícios específicos para aprimorar a força e definição nessa região', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(3, 1, 'Full Body', 'Treino abrangente para o corpo todo, visando o desenvolvimento equilibrado dos músculos e adaptar para começar a treinar com mais intensidade', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(4, 2, 'Peitoral Intermediário', 'Treino focado para desenvolver o músculo do peitoral, com exercicios e técnicas que melhoram o desenvolvimento do músculo alvo', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(5, 2, 'Costas Intermediário', 'Treino dedicado ao desenvolvimento dos músculos das costas, com exercícios visando aprimorar força e definição nessa região', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(6, 2, 'Pernas Intermediário', 'Treino abrangente para as pernas, visando o desenvolvimento equilibrado dos músculos das coxas, quadríceps, isquiotibiais e panturrilhas', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(7, 3, 'Peitoral Avançado', 'Treino focado para desenvolver o músculo do peitoral, com exercicios e técnicas que melhoram o desenvolvimento do músculo alvo', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(8, 3, 'Costas Avançado', 'Treino dedicado ao desenvolvimento dos músculos das costas, com exercícios visando aprimorar força e definição nessa região', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(9, 3, 'Ombros Avançado', 'Treino focalizado para fortalecer e tonificar os músculos dos ombros, com ênfase em exercícios específicos para essa região', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(10, 3, 'Bíceps Avançado', 'Treino desenvolvido para o crescimento e definição dos músculos do bíceps, incluindo movimentos que estimulam essa área de maneira eficaz', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(11, 3, 'Tríceps Avançado', 'Treino voltado para o fortalecimento e definição dos músculos do tríceps, com exercícios variados para atingir diferentes partes desse grupo muscular', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(12, 3, 'Pernas Avançado', 'Treino abrangente para as pernas, visando o desenvolvimento equilibrado dos músculos das coxas, quadríceps, isquiotibiais e panturrilhas', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(13, 3, 'Panturrilha Avançado', 'Treino específico para fortalecer e tonificar os músculos da panturrilha, com exercícios direcionados para essa área', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(14, 3, 'Quadríceps Avançado', 'Treino especializado para fortalecer e desenvolver os músculos do quadríceps, incluindo exercícios específicos para essa parte das pernas', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(15, 3, 'Abdômen Avançado', 'Treino focado na região abdominal para fortalecer e tonificar os músculos dessa área, com exercícios que visam a definição muscular', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_TP_TREINO VALUES(16, 3, 'Cardiovascular Avançado', 'Treino aeróbico para melhorar a capacidade cardiovascular e promover a queima de calorias, incluindo atividades como corrida, ciclismo e outros exercícios cardiovasculares', TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);


INSERT INTO T_VB_EXERC VALUES (1, 1, 'Supino Máquina', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (2, 1, 'Barra Fixa', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (3, 1, 'Elevação Lateral', 3, 10, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (4, 1, 'Abdominal', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (5, 2, 'Cadeira Flexora', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (6, 2, 'Cadeira Extensora', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (7, 2, 'Leg Press', 3, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (8, 2, 'Panturrilha', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (9, 3, 'Fly', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (10, 3, 'Puxada Alta', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (11, 3, 'Desenvolvimento Máquina', 3, 10, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (13, 3, 'Leg Press', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (14, 3, 'Panturrilha', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (15, 4, 'Supino Reto', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (16, 4, 'Supino Inclinado', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (17, 4, 'Peck Deck', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (18, 4, 'Tríceps Testa', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (19, 4, 'Elevação Lateral', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (20, 5, 'Barra Fixa', 4, 10, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (21, 5, 'Remada Curvada', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (22, 5, 'Pull Down', 3, 15, 45, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (23, 5, 'Rosca Direta na Polia', 3, 12, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (24, 5, 'Crucifixo Inverso na Polia', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (25, 6, 'Smith', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (26, 6, 'Leg Press', 4, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (27, 6, 'Cadeira Extensora', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (28, 6, 'Cadeira Flexora', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (29, 6, 'Avanço', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (30, 7, 'Supino Inclinado com Halter', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (31, 7, 'Supino Reto com Halter', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (32, 7, 'Supino Declinado com Halter', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (33, 7, 'Tríceps Testa', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (34, 7, 'Tríceps na Polia', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (35, 7, 'Elevação Lateral', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (36, 7, 'Desenvolvimento Máquina', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (37, 8, 'Puxada Alta', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (38, 8, 'Remada Curvada', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (39, 8, 'Remada Serrote', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (40, 8, 'Trapézio', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (41, 8, 'Rosca Scott Unilateral', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (42, 8, 'Rosca Martelo Halter', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (43, 8, 'Crucifixo Inverso com Halter', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (44, 9, 'Desenvolvimento com Barra', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (45, 9, 'Elevação Lateral', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (46, 9, 'Elevação Frontal', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (47, 9, 'Encolhimento de Ombros', 4, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (48, 9, 'Desenvolvimento Arnold', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (49, 10, 'Rosca Direta', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (50, 10, 'Martelo', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (51, 10, '21s', 3, 21, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (52, 10, 'Rosca Scott', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (53, 10, 'Rosca Concentrada', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (54, 11, 'Tríceps Pulley', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (55, 11, 'Tríceps Testa', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (56, 11, 'Tríceps Coice', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (57, 11, 'Tríceps Mergulho', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (58, 11, 'Tríceps Banco', 4, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (59, 12, 'Agachamento Livre', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (60, 12, 'Leg Press', 4, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (61, 12, 'Cadeira Extensora', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (62, 12, 'Cadeira Flexora', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (63, 12, 'Avanço', 3, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (64, 13, 'Gêmeos Sentado', 4, 15, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (65, 13, 'Gêmeos em Pé', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (66, 13, 'Elevação de Panturrilha', 3, 15, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (67, 13, 'Salto Vertical', 3, 10, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (68, 13, 'Caminhada em Uma Perna', 3, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (69, 14, 'Agachamento Hack', 4, 12, 2, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (70, 14, 'Agachamento Smith', 4, 10, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (71, 14, 'Cadeira Adutora', 3, 15, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (72, 14, 'Afundo com Barra', 3, 12, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (73, 14, 'Prensa 45°', 4, 15, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (74, 15, 'Prancha Abdominal', 3, 60, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (75, 15, 'Crunch', 4, 20, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (76, 15, 'Leg Raise', 3, 15, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (77, 15, 'Twist Russo', 3, 20, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (78, 15, 'Abdominal Infra', 4, 15, 1, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (79, 16, 'Corrida', 1, 30, 0, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (80, 16, 'Ciclismo', 1, 20, 0, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (81, 16, 'Pular Corda', 3, 5, 30, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (82, 16, 'Natação', 1, 15, 0, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);
INSERT INTO T_VB_EXERC VALUES (83, 16, 'Aeróbica', 3, 20, 30, TO_DATE(SYSDATE, 'DD/MM/YYYY'), USER);

```
---------------------
> ## INSTALAÇÃO e UTILIZAÇÃO
```
INSTALAR PACOTES NECESSÁRIOS - npm install
PARA RODAR O SISTEMA - npm run dev
```

# DICAS PARA UTILIZAR A PLATAFORMA VIVA BEM
> #### ACESSO A PLATAFORMA (caso queira testar com um usuário cadastrado no sistema)
```
EMAIL: edu@gmail.com
SENHA: senha
```

> # EXPLICANDO O FLUXO DE USABILIDADE DA PLATAFORMA
>> ##### Home Page:
>> - Ao acessar o projeto, ele abrirá a home page (página principal), contendo um botão para se logar, juntamente com um cabeçalho, contendo a Logo do projeto e um botão para realizar Login
>> ##### Página de Login
>> - Ao clicar no botão de login, ele será redirecionado para a página de login da plataforma onde contem um campo para inserir o email e a senha do usuário cadastrado
>> - Caso o usuário seja novo, ele poderá se cadastrar, clicando em um botão logo abaixo, na página de login
>> ##### Página de Cadastro
>>> ###### Parte 1 
>>> - Ao ser clicado, ele redirecionará para a tela de cadastro, onde começará um um simples formulário, para obter os dados do usuário
>>> ###### Parte 2
>>> - Ao clicar no botão "continuar", irá mostrar uma tela para o usuário selecionar o objetivo dele com a nossa plataforma, preenchendo um campo de "Peso Objetivo" e "Tempo do Objetivo"
>>> ###### Parte 3
>>> - Após isso, ele será redirecionado para uma tela onde ele irá pedir informações para calcular seu metabolismo basal, com base na fórmula de Harris Benedict, preenchendo campo de peso, altura, e frequencia de atividades físicas
>>> ###### Parte 4
>>> - Terminando essa tela, ele será redirecionado para uma outra tela que conterá os 3 biotipos existentes, mostrando um botão para o usuário ver como ele pode saber o biotipo dele
>>> ###### Parte 5
>>> - Após essa tela, virá outra, exibindo os nossos 3 tipos de treinos, Iniciante, Intermediário e Avançado, para o usuário escolher
>>> ###### Parte 6
>>> - Com isso, ele chega na tela de finalização do cadastro, exibindo as informações coletadas no cadastro, para que ele possa verificar se houve algum erro, caso esteja tudo certo, ele realiza o cadastro e é redirecionado para a tela de login, onde ele poderá se logar na nossa plataforma.

> ## Tela de Perfil
>> - Ao se logar, o usuario entra na página de perfil, onde exibirá todas as informações colhidas no momento do cadastro
>> - Ele poderá editar as informações do perfil dele, tais quais - Informações Pessoais - Plano de Dieta - Treinos - Medidas do corpo - Objetivo
>>> ### Treinos
>>> - Ao clicar no card de treino, ele será redirecionado para uma tela de exercicios, onde ele poderá selecionar e ver quais exercicios são bons, de acordo com o tipo de estágio o usuário esteja, em relação à musculação
>>> - Esses exercícios, contém o Nome, Séries, Repetições e o tempo de descanso entre uma série e outra, garantindo a melhor hipertrofia necessária para o ganho de músculos.
>>> ### Tela de Dieta
>>> - Ao clicar no card de dieta, que se encontra na tela de perfil do usuário, ele entrará em uma página, contendo uma planilha, com divisões entre Café da manha, Almoço, Café da Tarde e Janta, possuindo opções para o usuário escolher qual mais lhe agrada. Tudo isso de acordo com a taxa de metabolismo e o objetivo do usuário.
