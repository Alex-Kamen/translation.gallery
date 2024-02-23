import {createRouter, createWebHistory} from 'vue-router';
import IndexPage from "@/pages/IndexPage";
import DisclaimerPage from "@/pages/DisclaimerPage";
import ContactPage from "@/pages/ContactPage";
import JobPage from "@/pages/JobPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import QuestionsPage from "@/pages/QuestionsPage";
import RefundPolicyPage from "@/pages/RefundPolicyPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: IndexPage},
        {path: '/disclaimer', component: DisclaimerPage},
        {path: '/contact', component: ContactPage},
        {path: '/job', component: JobPage},
        {path: '/privacy_policy', component: PrivacyPolicyPage},
        {path: '/questions', component: QuestionsPage},
        {path: '/refund_policy', component: RefundPolicyPage},
        {path: '/services', component: ServicesPage},
        {path: '/about', component: AboutPage},
    ]
})
