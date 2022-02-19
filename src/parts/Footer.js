import React from 'react'

import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-auto" style={{ width: 394 }} >
                    <IconText />
                    <p class="brand-tagline">
                    We Kaboom your beauty holiday
                    instantly and memorable.
                    </p>
                </div>
                <div class="col-auto mr-5">
                    <h6 class="mt-2">For Beginners</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <Button type="link" href="/register">New Account</Button>
                        </li>
                        <li class="list-group-item">
                            <Button type="link" href="/properties">Start Booking a Room</Button>
                        </li>
                        <li class="list-group-item">
                            <Button type="link" href="/use-payments">Use Payments</Button>
                        </li>
                    </ul>
                </div>
                <div class="col-2 mr-5">
                    <h6 class="mt-2">Explore Us</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <Button type="link" href="/career">Our Careers</Button>
                        </li>
                        <li class="list-group-item">
                            <Button type="link" href="/privacy">Privacy</Button>
                        </li>
                        <li class="list-group-item">
                            <Button type="link" href="/term"> Terms & Conditions</Button>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <h6 class="mt-2">Connect Us</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                        </li>
                        <li class="list-group-item">
                            <Button isExternal type="link" href="tel:+6282125665225">021 - 2566 - 5225</Button>
                        </li>
                        <li class="list-group-item">
                            <span>Staycation, Sunggal, Medan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col text-center copyrights mt-5 mb-3">
                Copyright 2021   ● All rights reserved  ●  Staycation 
                </div>
            </div>
        </div>
    </footer>
  )
}