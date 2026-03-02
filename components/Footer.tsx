import Link from "next/link";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VNR Logistics</h3>
                <p className="text-sm text-gray-300">Moving Industries Forward</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional road freight solutions across South Africa. Connecting
              Durban, Johannesburg, and Cape Town with reliability and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  About & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Road Freight Transport</li>
              <li>Car Carrier Division</li>
              <li>Container Movement</li>
              <li>Break Bulk Cargo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Serving Durban, Johannesburg & Cape Town</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+27 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>info@vnrlogistics.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VNR Logistics. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
