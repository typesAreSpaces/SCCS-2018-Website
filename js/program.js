// The Links for each author should be of the form
// ${key in authors} + 'Link'

class author {
    constructor(name, advisor, time, abstract1){
	this.name = name;
	this.advisor = advisor;
	this.time = time;
	this.abstract1 = abstract1;
    }
}

var authors = {
    "Humayra" : new author("Humayra Tasnim",
			   "Melanie Moses",
			   "09:00 - 09:25 A.M.",
			   "<p>T cells play a vital role in eliminating pathogenic infections. To activate, T cells need to encounter dendritic cells (DCs) bearing cognate antigen in lymph nodes (LNs). Positioning and movement of T cells in LNs is influenced by chemokines including CCL21 as well as multiple cells types and structures in the LNs. Some studies have suggested that DC colocalization with high endothelial venules (HEVs) may facilitate T:DC interaction, and T cell movement along fibroblastic reticular cells (FRCs) may provide guidance cues to also facilitate T cell interaction with DCs. Despite the clear importance of chemical signals, cells, and structures that can contribute to T cell positioning, relatively few studies have used quantitative measures to analyze and compare T cell interactions with each of these key cell types.</p><p> Here we use a novel application of normalized mutual information (NMI) to determine the extent to which T cells colocalize with DCs, FRCs, or HEVs. We find that while T cells are spatially associated with all three cell types, they are most closely associated with HEVs, followed by FRCs, and least associated with their ultimate targets, DCs. We then analyze whether a key motility chemokine receptor, C-C chemokine receptor type 7 (CCR7), affects T cell colocalization with DCs. We find that CCR7-deficient naive T cells are, surprisingly, more colocalized with DCs than wild type (WT) T cells. These results demonstrate that the NMI metric can quantify the amount of spatial interactions between T cells and multiple cell types and structures from in vivo two photon microscopy images. By revealing these interactions, we gain insights into factors that drive non-random T cell localization, potentially affecting the timing of productive T:DC interactions and T cell activation.</p>"),
    "Jacob" : new author("Jacob Hobbs",
			 "Trilce Estrada",
			 "09:25 - 09:50 A.M.",
			 "<p>FlipIt is an abstract cyber-security game designed to investigate optimal strategies for managing security resources in response to Advanced Persistent Threats. In this paper, we establish bounds on the optimal benefits and rates of play for FlipIt, and show that the best strategy for many variants of the game involves presenting a credible threat to potential players. Because of this, FlipIt is most like the game of chicken. We apply our results to the analysis of Advanced Persistent Threats and discuss the value of FlipIt to cyber security research.</p>"),
        "Lee" : new author("Lee Jensen",
		       "Lance Williams",
		       "10:05 - 10:30 A.M.",
			   "<p>Recent work showed how an expression in a functional programming language can be compiled into a massively redundant, spatially distributed, concurrent computation called a distributed virtual machine (DVM). A DVM is comprised of bytecodes reified as actors undergoing diffusion on a two-dimensional grid and communicating via messages containing encapsulated virtual machine states. Because the semantics of expression evaluation are purely functional, DVMs can employ massive redundancy in the representation of the heap to help ensure that computations complete even when large areas of the physical host substrate have failed. A DVM hosted on a modular a substrate can also take advantage of additional hardware added at runtime to increase redundancy and the probability of completion. We have implemented the first DVM prototype in hardware using a Field Programmable Gate Array (FPGA). The implementation is a Globally Asynchronous Locally Synchronous (GALS) circuit where ring oscillators provide the asynchronous clock signal at each grid location. Asynchronous spatially distributed machines address the well known problem affecting traditional machine architectures of clock a networks consuming increasingly large areas as device size increases.</p>"),
    "QiLu" : new author("Qi Lu",
			"Melanie Moses",
			"10:30 - 10:55 A.M.",
			"<p>Designing physical systems that can function within the noise, error, and uncertainty of the real world is a central challenge in artificial life. The existence of living systems demonstrates that it is possible to effectively collect resources from natural environments despite these challenges. Thus, many artificial systems designed to operate in the real-world take inspiration from this biology. This paper describes the performance of two algorithms for collective robot foraging: the distributed deterministic spiral algorithm (DDSA) and the central-place foraging algorithm (CPFA). In the DDSA, robots travel along pre-planned spiral paths; robots detect the nearest targets first and, in theory, guarantee eventual complete coverage of the arena with minimal overlap. In the CPFA, robots use algorithms inspired by the foraging behaviors of ants; they search for targets stochastically and share information to recruit other robots to locations where they detect multiple targets.</p><p>We implemented these two algorithms and compare performance in a Gazebo simulation to performance in physical robots in an outdoor arena with obstacles. Previous simulations, even those incorporating simulated noise and error, showed that the DDSA outperformed the CPFA. These experiments show that in more realistic simulations and in physical robots, the CPFA outperforms the DDSA. Further, the movement of robots governed by the deterministic DDSA in a world with obstacles, collisions, and errors is visually indistinguishable from the stochastic CPFA. This suggests, first, that biologically-inspired algorithms can outperform theoretically more efficient algorithms in the real world and, second, that the apparently stochastic movement of biological agents could reflect underlying deterministic algorithms operating in noisy and uncertain environments.</p>"
		       ),
    "Abhinav" : new author("Abhinav Aggarwal",
			   "Jared Saia",
			   "11:10 - 11:35 P.M.",
			   "<p>Many decentralized systems rely on a trusted third party to generate a set of Sybil-resistant identities for the participants of the system. In the absence of such a party, it becomes challenging to establish this set while preserving the required security properties. Although there is recent work that presents solutions to this problem, unfortunately, all known schemes have large communication and computation overhead.</p><p>In this paper, we propose a protocol, called GENID, that allows the participants to agree on a set that contains the identities of all honest nodes in the presence of a computationally bounded Byzantine adversary and without any knowledge of the number of nodes that may initially want to join the system. Our protocol guarantees that the fraction of adversarial identities in the final set is no more than the total amount of computational hash power with the adversary. Moreover, we extend our algorithm to handle dynamic arrival and departure of nodes, while preserving the required security and bandwidth guarantees for up to a linear amount of churn in every round.</p><p>Unlike previous work, our algorithm runs in expected constant number of rounds and ensures that with high probability (in the security parameter), the honest nodes reach consensus as required. For applications that can tolerate a logarithmic number of rounds, our algorithm guarantees that with high probability (in the number of nodes), the honest nodes have consensus their sets of identities. In both cases, the honest nodes send only $O(n polylog(n))$ bits in expectation per round and solve the computational puzzles only once during the entire algorithm.</p>"),
    "Xinhua" : new author("Xinhua Zhang",
			  "Lance Williams",
			  "11:35 - 12:00 P.M.",
			  "<p>Because the magnitude of inner products with its basis functions are invariant to rotation and scale change, the Fourier-Mellin transform has long been used as a component in Euclidean invariant 2D shape recognition systems. Yet Fourier-Mellin transform magnitudes are only invariant to rotation and scale changes about a known center point, and full Euclidean invariance shape recognition is not possible except when this center point can be consistently and accurately identified. In this paper, we describe a system where a local Fourier-Mellin transform is computed at every position in the image. The spatial support of the Fourier-Mellin basis functions is made local by multiplying them with a polynomial envelope. The resulting {\it local Fourier-Mellin descriptors} are treated as filters and a set of inner products at every position is computed using convolution. Significantly, the set of magnitudes at each point is not (by itself) used as a feature for Euclidean invariant shape recognition because reliable discrimination would require filters with spatial support large enough to fully encompass the shapes. Instead, we rely on the fact that normalized histograms of local Fourier-Mellin descriptor magnitudes are fully Euclidean invariant. We demonstrate a system based on the VLAD machine learning method that performs Euclidean invariant recognition of 2D shapes and requires an order of magnitude less training data than comparable systems based on convolutional neural networks. Finally, we demonstrate the reconstruction of source images from the magnitudes of local Fourier-Mellin descriptors. The recovery of the implicit descriptor phases is only possible because of the descriptors' compact spatial support. The importance of the locality resulting from the use of polynomial envelopes is evaluated in both recognition and reconstruction tasks.</p>"),
    "Jeremy" : new author("Jeremy Benson",
			  "Trilce Estrada",
			  "12:00 - 12:25 P.M.",
			  "<p>Diabetic Retinopathy (DR) is a leading cause of blindness worldwide and is estimated to threaten the vision of nearly 200 million by 2030. To work with the ever-increasing population, the use of image processing algorithms to screen for those at risk has been on the rise. Research-oriented solutions have proven effective in classifying images with or without DR, but often fail to address the true need of the clinic - referring only those who need to be seen by a specialist, and reading every single case. In this work, we leverage an array of image preprocessing techniques, as well as Transfer Learning to re-purpose an existing deep network for our tasks in DR. We train, test, and validate our system on 979 clinical cases, achieving a 95% Area Under the Curve (AUC) for referring Severe DR with an equal error Sensitivity and Specificity of 90%. Our system does not reject any images based on their quality, and is agnostic in terms of eye side and field. These results show that general purpose classifiers can, with the right type of input, have a major impact in clinical environments or for teams lacking access to large volumes of data or high-throughput supercomputers.</p>"),
    "Esteban" : new author("Esteban Guillen",
			  "Trilce Estrada",
			  "04:15 - 05:15 P.M.",
			  "<p>In the past six years a new subfield of Machine Learning has emerged called Deep Learning. Deep Learning is based on Neural Networks which are loosely inspired by neurons in our brain. Neural Networks are not a new technology, but recent advances in hardware have paved the way for much larger and deeper architectures to be realized. Today Deep Learning is the state of the art approach for natural language processing, automatic speech recognition, and computer vision tasks.  One key distinguishing characteristic of Deep Learning algorithms is the algorithms’ performance, that is, the ability to classify correctly, continues to increase as the size of the data sets from which they learn increases. This contrasts to the performance of more traditional Machine Learning techniques that begin to plateau at some point as training data sets increase. Another key characteristic is many Deep Learning algorithms can learn from raw data samples rather than having to extract features by running extensive pre-processing.</p><p>This tutorial will introduce the audience to current approaches in Deep Learning using TensorFlow. The tutorial will be begin with a brief overview of the theory behind Deep Learning and then demonstrate through a live coding demo how to use a Convolutional Neural Network (CNN) to do classification on image data.</p>")
}

function clickAuthor(x){
    
    if(x == "Esteban")
	activity = "Tutorial"
    else
	activity = "Research Presentation"
    
    document.write("<div id=" + x + " style='display: none'>" +
		   `<h1><font color="#b81233">${activity}</font></h1>
		   <h2><b>${authors[x].name}</b></h2>
		   <h3>Advisor: <i>${authors[x].advisor}</i></h3>
		   <h3><font color="#b81233">Centennial Engineering Center Auditorium</h3>
		   <h3>Wednesday, April 18, 2018 ${authors[x].time}</font></h3>
		   ${authors[x].abstract1}
		   <input id="Back` + x + `" type="button" class="w3-btn w3-block" style="background-color: #b81233; color: white" value="&#8617 Back to the Program">
		   </div>`)
}

for(var x in authors){
    clickAuthor(x);
}

$(document).ready(() => {
    $("#AbhinavLink").click(() => $("#table").fadeOut("slow", () => $("#Abhinav").fadeIn("slow")));
    $("#BackAbhinav").click(() => $("#Abhinav").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#QiLuLink") .click(() => $("#table").fadeOut("slow", () => $("#QiLu").fadeIn("slow")));
    $("#BackQiLu") .click(() => $("#QiLu").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#LeeLink")    .click(() => $("#table").fadeOut("slow", () => $("#Lee").fadeIn("slow")));
    $("#BackLee")    .click(() => $("#Lee").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#HumayraLink").click(() => $("#table").fadeOut("slow", () => $("#Humayra").fadeIn("slow")));
    $("#BackHumayra").click(() => $("#Humayra").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#XinyuLink")  .click(() => $("#table").fadeOut("slow", () => $("#Xinyu").fadeIn("slow")));
    $("#BackXinyu")  .click(() => $("#Xinyu").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#JacobLink")  .click(() => $("#table").fadeOut("slow", () => $("#Jacob").fadeIn("slow")));
    $("#BackJacob")  .click(() => $("#Jacob").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#XinhuaLink") .click(() => $("#table").fadeOut("slow", () => $("#Xinhua").fadeIn("slow")));
    $("#BackXinhua") .click(() => $("#Xinhua").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#JeremyLink") .click(() => $("#table").fadeOut("slow", () => $("#Jeremy").fadeIn("slow")));
    $("#BackJeremy") .click(() => $("#Jeremy").fadeOut("slow", () => $("#table").fadeIn("slow")));
    $("#EstebanLink") .click(() => $("#table").fadeOut("slow", () => $("#Esteban").fadeIn("slow")));
    $("#BackEsteban") .click(() => $("#Esteban").fadeOut("slow", () => $("#table").fadeIn("slow")));
});
