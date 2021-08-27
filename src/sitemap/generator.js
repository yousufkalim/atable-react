import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import Routes from '../routes';
import path from "path";
import fs from 'fs';

const hostname = 'http://localhost:3000'; 

const dest = path.resolve()

const sitemap = buildSitemap(hostname, routes);