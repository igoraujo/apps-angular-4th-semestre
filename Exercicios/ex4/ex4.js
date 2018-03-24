var numFaces = 5;
			var ladoEsquerdo = document.getElementById("leftSide");
			var ladoDireito = document.getElementsByTagName("div")[1];
			var docBody = document.getElementsByTagName("body")[0];			
			var score = 0;
			var level = 0;
			
			function generateFaces(){
				clearFaces();
				// Loop para criar as imagens do lado esquerdo
				for(var i = 0; i < numFaces; i++){
				   //@TODO Criando um elemento img
				   
					var imagem = document.createElement("img");
					ladoEsquerdo.appendChild(imagem);
				   
					imagem.src = "smile.png"; // Carregando Imagem da web
					var top_pos = Math.floor(Math.random()*401); //Gerando posição aleatório superior
					var left_pos = Math.floor(Math.random()*401); //Gerando posição aleatória esquerda
					imagem.style.top = top_pos + "px"; // setando posição aleatória da nova imagem
					imagem.style.left = left_pos + "px"; // setando posição aleatória da nova imagem
					//@TODO Adicionando nova imagem no lado esquerdo
				}
				// Criando lado direito
				 //@TODO Clonando lado esquerdo DICA --> cloneNode(true)
				 
				 var imagensLadoEsquerdo = ladoEsquerdo.cloneNode(true);
				 
				 
				imagensLadoEsquerdo.removeChild(imagensLadoEsquerdo.lastChild); // Removendo ultima imagem adicionada
				ladoDireito.appendChild(imagensLadoEsquerdo);
				
				//@TODO Adicionando imagens no lado direito

				// Criando eventListner no último elemento
				ladoEsquerdo.lastChild.onclick= function nextLevel(event){
					event.stopPropagation(); // Garantindo que o evento irá ocorrer apenas uma vez
					numFaces += 5; //Aumentando o número de faces em 5
					generateFaces(); // Gerando novas faces
					
					if(score == 0){
						score = 1;						
					}					
					score *= 2;
					level ++;
										
					document.getElementById("lbl").innerHTML = score;
					console.log(score);
					console.log(level);
					
				};

				// Criando um event Listner em todo o documento
				docBody.onclick = function gameOver() {
					alert("Game Over!\nlevel: " + level + "\nscore: " + score); // Mostrando Aviso
					docBody.onclick = null; // Removendo listner
					ladoEsquerdo.lastChild.onclick = null; // Garantindo que o usuário não roube no jogo 
					//Retirando listner da ultima imagem

				};
			}

			// Método para limpar tela.
			function clearFaces(){
				while(ladoEsquerdo.firstChild){
					ladoEsquerdo.removeChild(ladoEsquerdo.firstChild); 
				}
				while(ladoDireito.firstChild){
					ladoDireito.removeChild(ladoDireito.firstChild); 
				}
			}