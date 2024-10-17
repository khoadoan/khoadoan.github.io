---
layout: research
title: research
tagline: <span class="font-weight-bold">Machine Learning Algorithms</span> that Make Sense
tagline_desc: in constrained and large-scale settings with applications in <strong>Advertising</strong>, <strong>Healthcare</strong>, <strong>Sustainability</strong> (Climate, Computing, Agricultural), <strong>Social Goods</strong>...
permalink: /research
definition: "<span style='font-size:1.2em'><strong>MAIL</strong></span> stands for <span style='font-size:1.2em'>practical <strong>M</strong>achine <strong>L</strong>earning and <strong>AI</strong> Lab</span>, led by <strong>Dr. Khoa D Doan</strong>."
description: "Here at <strong>MAIL</strong>, We develop computational frameworks that enable existing complex/deep models to be more suitable for practical uses. We focus on improving the following aspects of existing models: (i) training/inference, (ii) realistic assumptions, (iii) algorithmic robustness, and (iv) efficiency in constrained settings. Most of our ML/AI solutions center around large-scale approaches that have low computational complexity and require less human effort."
research_image: icon-v1.png
nav: true
weight: 10
---

<!-- <h5 style="color:red">***Warning: This page is severely out of date. Update coming soon in Summer 2024!</h5> -->

<!-- Here at **MAIL**, We develop computational frameworks that enable existing complex/deep models to be more suitable for practical uses. We focus on improving the following aspects of existing models: (i) training/inference, (ii) realistic assumptions, (iii) algorithmic robustness, and (iv) efficiency in constrained settings. Most of our ML/AI solutions center around large-scale approaches that have low computational complexity and require less human effort.  -->

<!-- [more about our research](research/) -->

<!-- Khoa D Doan is currently an **Assistant Professor** in the College of Engineering and Computer Science (CECS) at VinUniversity, Vietnam. Previously, he was a **Researcher** in the Cognitive Computing Lab at [Baidu Research](http://research.baidu.com/) working with [Dr. Ping Li](http://research.baidu.com/People/index-view?id=111) on generative modeling and its applications in Information Retrieval and AI Security. He was a member of [Prof. Chandan K. Reddy](https://people.cs.vt.edu/reddy)'s lab at VT and the [Sanghani Center for Artificial Intelligence & Data Analytics](https://sanghani.cs.vt.edu/) since 2016. From May 2019 to Feb 2020, he was at [Criteo AI Lab](https://ailab.criteo.com/) in Palo Alto, CA, where he worked with [Dr. Sathiya Keerthi Selvaraj](http://www.keerthis.com/) and Dr. Fengjiao Wang. Before that, he was a Faculty Research Associate of [Earth System Science Interdisciplinary Center](http://essic.umd.edu/) at [UMD](https://www.umd.edu/) and also had a joint appointment at [NASA Goddard Space Flight Center](https://www.nasa.gov/goddard), where he worked on high-performance and distributed system research. Khoa D Doan received his Ph.D. in Computer Science from [Virginia Polytechnic Institute and State University](cs.vt.edu), and MS in Computer Science from [University of Maryland, College Park](cs.umd.edu). -->

<!-- <h1 class="post-title">{{ "Research Interests"}}</h1><a name="research_interests"></a> -->
# Research Interests

Our research focuses on understanding the practical limits of using existing ML methods in the real-world. Essential, we seek answers to the following question: *How to make ML models simpler & reliable to use in constrained settings*? **Simplicity** refers to the ability to (i) build or implement the method easily, (ii) execute the deployed model efficiently, and (iii) evolve the deployed model with less effort. **Reliability** relates to (i) whether we can rely on the model to solve the intended task well, (ii) whether this performance is preserved under frequently perturbed environments in practice such as data corruptions or distributional changes, and (iii) whether the model is resilient to (i.e., its performance is not significantly affected by) various forms of security attacks such as adversarial examples and causal attacks. In this sense, we believe that many existing ML methods, including those with *complex* deep neural networks, are *reliable* but *not yet easy-to-use* because they do not satisfy various constraints seen in real-world applications. We also strongly believe the effort to answer this question will help us truly realize the potential of AI/ML methodology in practice.  

Our goal, therefore, is to develop computational frameworks that enable existing complex/deep models to be more suitable for practical uses. We focus on improving the following aspects of existing models: (i) **training/inference**, (ii) **realistic assumptions**, (iii) **algorithmic robustness**, and (iv) **efficiency in constrained settings**. Most of our ML/AI solutions center around generative-based approaches that have low computational complexity and require less human effort. Currently, our research activities include, but not limited to, the following themes (*with selected publications*):

<span style='font-size:1.2em'>**Trustworthy Machine Learning**</span>

We focus in several issues such as security vulnerabilities in training data, training process, and model inference, robust predictions under missing data and OOD scenarios, and vulnerabilities in Federated Learning systems.

* Overcoming Catastrophic Forgetting in Federated Class-Incremental Learning via Federated Global Twin Generator (2024 by Nguyen et al)
* Estimating Uncertainties of Multimodal Models with Missing Modalities (2024 Nguyen et al.)
* Non-Cooperative Backdoor Attacks in Federated Learning: A New Threat Landscape (2024 by Nguyen et al.)
* Everyone Can Attack: Repurpose Lossy Compression as a Natural Backdoor Attack
(2024 by Yang et al.)
* Synthesizing Physical Backdoor Datasets: An Automated Framework Leveraging Deep Generative Models (2024 by Yang et al.)
* Flatness-aware Sequential Learning Generates Resilient Backdoors (***ECCV*** 2024 by Pham et al.)
* Data Poisoning Quantization Backdoor Attack (***ECCV*** 2024 by Huynh et al.)
* Composite Concept Extraction through Backdooring (**ICPR*** 2024 by Ghosh et al.)
* Fooling the Textual Fooler via Randomizing Latent Representations (***ACL*** 2024 by Hoang et al.)
* Understanding the Robustness of Randomized Feature Defense Against Query-Based Adversarial Attacks (***ICLR*** 2024 by Nguyen et al.)
* Backdoor attacks and defenses in federated learning: Survey, challenges and future research directions (***EAAI*** 2024 by Nguyen et al.)
* Iba: Towards irreversible backdoor attacks in federated learning (***NeurIPS*** 2023 by Nguyen et al.)
* A Cosine Similarity-based Method for Out-of-Distribution Detection (***ICML-W*** 2023 by Nguyen et al.)
* Clean-label Backdoor Attacks by Selectively Poisoning with Limited Information from Target Class (***NeurIPS-W*** 2023 by Nguyen et al.)
* Defending backdoor attacks on vision transformer via patch processing  (***AAAI*** 2023 by Doan et al.)
* Marksman Backdoor: Backdoor Attacks with Arbitrary Target Class (***NeurIPS*** 2022 by Doan et al.)
* Backdoor Attack with Imperceptible Input and Latent Modification (***NeurIPS*** 2021 by Doan et al.)
* LIRA: Learnable, Imperceptible and Robust Backdoor Attacks (***ICCV*** 2021 by Doan et al.)

<span style='font-size:1.2em'>**Information Retrieval and Applications**</span>

We focus in hashing-based methods and retrieval with complex, non-metric measures.

* Cooperative Learning of Multipurpose Descriptor and Contrastive Pair Generator via Variational MCMC Teaching for Supervised Image Hashing (2024 by Doan et al)
* Asymmetric Hashing for Fast Ranking via Neural Network Measures  (*SIGIR* 2023 by Doan et al.)
* One Loss for Quantization: Deep Hashing with Discrete Wasserstein Distributional Matching  (*CVPR* 2022 by Doan et al.)
* Generative Hashing Network (*ACCV* 2022 by Doan et al.)
* Interpretable Graph Similarity Computation via Differentiable Optimal Alignment of Node Embeddings (*SIGIR* 2021 by Doan et al.)
* Image Hashing by Minimizing Discrete Component-wise Wasserstein Distance (2021 by Doan et al.)
* Efficient Implicit Unsupervised Text Hashing using Adversarial Autoencoder (*WWW* 2020 by Doan et al.)

<span style='font-size:1.2em'>**Efficient Generative AI**</span>

We focus on developing low-resource algorithms for generative AIs.

* Sparse Watermarking in LLMs with Enhanced Text Quality (2024 by Hoang et al.)
* Fair Generation in LLMs with RAG (Chu et al.)
* Reward Over-optimization in Direct Alignment Algorithms with Adaptive Learning (2024 by Nguyen et al.)
* Predictive Concept Attribution in Difussion Models (by Nguyen et al.)
* Synthesizing Physical Backdoor Datasets: An Automated Framework Leveraging Deep Generative Models (2024 by Yang et al.)
* Image Generation Via Minimizing Frechet Distance in Discriminator Feature Space (2021 by Doan et al.)

<span style='font-size:1.2em'>**Low-resource Machine Learning**</span>

Currently, a large part of our research focuses on solving various societal challenges with AI in Vietnam. We're working on problems such as low-resource NLP, low-resource remote-sensing predictive algorithms, cross-cultural language understanding, and visual question answering algorithms for medical domain. For more information, please visit the [Center for Envrionmental Intelligence](https://cei.vinuni.edu.vn/) (**CEI**, where Prof. Khoa D. Doan is currently the Environment Monitoring Lab Director) and [VinUni-Illinois Smart Health Center](https://smarthealth.vinuni.edu.vn/) (**VISHC**, where Prof. Khoa D. Doan is currently the Associate Director)


<!-- <span style='font-size:1.2em'>**AI Backdoor Security with Generative Models**</span>

* Backdoor Attack with Imperceptible Input and Latent Modification (*NeurIPS* 2021 by Doan et al.)
* LIRA: Learnable, Imperceptible and Robust Backdoor Attacks (*ICCV* 2021 by Doan et al.)
* Adversarial Defenses for Vision Transformers   (*Under Submission* 2022 by Peng et al.)
* Marksman Backdoor: Backdoor Attacks with Arbitrary Target Class (*NeurIPS* 2022 by Doan et al.)
* Defending backdoor attacks on vision transformer via patch processing  (*AAAI* 2023 by Doan et al.) -->

<!-- # Industry Interests -->