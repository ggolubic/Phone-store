import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8
} from "./utility/images";

export interface data {
  id: number;
  title: string;
  img: any;
  price: number;
  company: string;
  info: string;
  inCart: boolean;
  count: number;
  total: number;
}
export const phones: data[] = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: product1,
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "Samsung S7",
    img: product2,
    price: 16,
    company: "SAMSUNG",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: product3,
    price: 8,
    company: "htc",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: product4,
    price: 18,
    company: "htc",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: product5,
    price: 24,
    company: "htc",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: product6,
    price: 17,
    company: "apple",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "Iphone 7",
    img: product7,
    price: 30,
    company: "apple",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: product8,
    price: 2,
    company: "apple",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit dapibus nisl lacinia scelerisque. Pellentesque tempor lorem turpis, sed lacinia mi congue sit amet. Nullam dignissim metus elit, non posuere neque maximus id. Suspendisse accumsan enim a augue ultricies mattis. Pellentesque aliquet tellus at massa ultrices tincidunt. Duis venenatis non arcu id imperdiet. Quisque a purus ligula. Nullam consequat leo augue, sed tincidunt nulla vestibulum at. Vestibulum sit amet accumsan metus. Nulla ac pharetra turpis, sit amet dignissim neque. Nulla ullamcorper, lorem eget luctus venenatis, nulla purus sagittis orci, id efficitur nisl erat sit amet ante. Nulla facilisi. Nam vitae metus eros. Ut pulvinar urna ut enim consequat, et posuere nulla facilisis. Nunc venenatis gravida malesuada. Sed at interdum dolor.",
    inCart: false,
    count: 0,
    total: 0
  }
];

export const productDetails = {
  id: 7,
  title: "Iphone 7",
  img: product7,
  price: 30,
  company: "apple",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
};
