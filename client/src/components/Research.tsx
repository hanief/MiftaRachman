export default function Research() {
  return (
    <section id="research" className="mb-12">
      <h2 className="section-title">Research</h2>
      
      <div className="mb-8">
        <h3 className="subsection-title">Current Research Focus</h3>
        <p className="mb-4">
          My current research centers on the development and application of machine learning algorithms for healthcare applications. Specifically, I focus on the following areas:
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>Deep learning approaches for medical image analysis and disease detection</li>
          <li>Predictive modeling for patient outcomes in critical care settings</li>
          <li>Ethical considerations in healthcare AI implementation</li>
          <li>Federated learning systems for privacy-preserving healthcare analytics</li>
        </ul>
        <p>
          This work is conducted in collaboration with the University Hospital System and the National Institute of Health Informatics, with funding support from the National Science Foundation (Grant #AI-2023-57892).
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="subsection-title">Methodology</h3>
        <p className="mb-4">
          Our research methodology integrates quantitative and qualitative approaches to address complex healthcare challenges. We employ state-of-the-art deep learning architectures, including convolutional neural networks and transformer models, adapted for medical data processing. All models undergo rigorous validation using multi-center datasets to ensure generalizability and robustness.
        </p>
        <p>
          Ethical considerations are embedded throughout our research process, with particular attention to fairness, interpretability, and transparency. We implement SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) methods to enhance model interpretability for clinical stakeholders.
        </p>
      </div>
      
      <div>
        <h3 className="subsection-title">Research Impact</h3>
        <p className="mb-4">
          Our AI-based diagnostic support system for pulmonary diseases has been deployed in three major teaching hospitals, demonstrating a 24% improvement in early detection rates compared to conventional methods. Additionally, our predictive models for ICU readmission have been incorporated into clinical decision support systems at the University Hospital, contributing to a 17% reduction in preventable readmissions.
        </p>
        <p>
          These outcomes highlight the translational impact of our research, bridging the gap between algorithmic innovation and clinical implementation. Future work will extend these approaches to additional medical specialties and explore the integration of multimodal data sources for comprehensive patient modeling.
        </p>
      </div>
    </section>
  );
}
