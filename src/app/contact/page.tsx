import { PortfolioDetails } from "../../data/main";

export default function Contact() {
  const phoneWithoutSpaces = PortfolioDetails.common.phone.replaceAll(" ", "");
  const infos = [
    {
      id: 1,
      icon: `<svg class="svg" height="533pt" viewBox="-123 -16 533 533.33331" width="533pt" xmlns="http://www.w3.org/2000/svg"><path d="m280.582031 52.625c0-29.066406-23.558593-52.625-52.625-52.625h-182.246093c-29.066407 0-52.628907 23.558594-52.628907 52.625v394.75c0 29.066406 23.5625 52.625 52.628907 52.625h182.246093c29.066407 0 52.625-23.558594 52.625-52.625zm-262.5 38.625h237.5v291.25h-237.5zm27.375-66.25h182.753907c15.230468 0 27.371093 12.695312 27.371093 27.929688v13.320312h-237.5v-13.320312c0-15.234376 12.144531-27.929688 27.375-27.929688zm182.753907 450h-182.753907c-15.015625.109375-27.269531-11.984375-27.375-27v-40.5h237.5v40.179688c.074219 15.015624-12.035156 27.246093-27.050781 27.320312zm0 0"/><path d="m161.296875 428.75h-48.925781c-6.90625 0-12.5 5.59375-12.5 12.5s5.59375 12.5 12.5 12.5h48.925781c6.902344 0 12.5-5.59375 12.5-12.5s-5.597656-12.5-12.5-12.5zm0 0"/></svg>`,
      title: "Call Me",
      value: `<a href="tel:${phoneWithoutSpaces}">${PortfolioDetails.common.phone}</a>`,
    },
    {
      id: 2,
      icon: `<svg class="svg" height="560pt" viewBox="-17 -101 560 560" width="560pt" xmlns="http://www.w3.org/2000/svg"><path d="m462.5-5.582031h-400c-34.511719.011719-62.484375 27.988281-62.5 62.5v233.371093c.015625 34.511719 27.988281 62.492188 62.5 62.5h400c34.511719-.007812 62.484375-27.988281 62.5-62.5v-233.371093c-.015625-34.511719-27.988281-62.488281-62.5-62.5zm-400 25h400c18.003906.046875 33.453125 12.824219 36.875 30.496093l-236.875 132.003907-236.875-132.003907c3.421875-17.671874 18.871094-30.449218 36.875-30.496093zm400 308.25h-400c-20.683594-.0625-37.441406-16.816407-37.5-37.5v-212l231.375 128.996093c1.875 1.03125 3.980469 1.59375 6.125 1.628907 2.152344.023437 4.265625-.539063 6.125-1.628907l231.375-128.996093v212c-.015625 20.703125-16.796875 37.480469-37.5 37.5zm0 0"/></svg>`,
      title: "Email Us",
      value: `<a href="mailto:${PortfolioDetails.common.email}">${PortfolioDetails.common.email}</a>`,
    },
    {
      id: 3,
      icon: `<svg class="svg" height="556pt" viewBox="-66 -17 556 556.00088" width="556pt" xmlns="http://www.w3.org/2000/svg"><path d="m356.996094 61.332031c-39.199219-39.269531-92.40625-61.332031-147.890625-61.332031-55.488281 0-108.691407 22.0625-147.894531 61.332031-37.796876 38.003907-60.558594 88.410157-64.078126 141.894531-1.816406 29.296876 2.480469 58.644532 12.613282 86.1875 9.996094 27.359376 26.234375 53.214844 48.339844 76.699219l141.902343 151.140625c2.359375 2.527344 5.65625 3.972656 9.117188 3.996094 3.46875.035156 6.792969-1.417969 9.121093-3.996094l141.894532-151.140625c22.105468-23.484375 38.34375-49.339843 48.339844-76.699219 10.257812-27.507812 14.558593-56.886718 12.617187-86.1875-3.546875-53.476562-26.304687-103.875-64.082031-141.894531zm27.855468 219.464844c-8.867187 24.230469-23.355468 47.21875-43.09375 68.199219l-132.652343 141.402344-132.78125-141.402344c-19.734375-20.980469-34.222657-43.96875-43.09375-68.199219-9.011719-24.25-12.796875-50.128906-11.113281-75.945313 3.089843-47.460937 23.277343-92.195312 56.832031-125.910156 34.503906-34.542968 81.328125-53.960937 130.15625-53.960937s95.648437 19.417969 130.15625 53.960937c33.550781 33.714844 53.746093 78.449219 56.832031 125.910156 1.585938 25.820313-2.242188 51.691407-11.242188 75.945313zm0 0"/><path d="m209.105469 101.929688c-53.710938 0-97.429688 44.710937-97.429688 99.671874 0 54.960938 43.71875 99.679688 97.429688 99.679688 53.710937 0 97.429687-44.71875 97.429687-99.679688 0-54.960937-43.71875-99.671874-97.429687-99.671874zm0 174.371093c-39.972657 0-72.449219-33.476562-72.449219-74.699219 0-41.21875 32.476562-74.691406 72.449219-74.691406 39.972656 0 72.449219 33.472656 72.449219 74.691406 0 41.222657-32.476563 74.699219-72.449219 74.699219zm0 0"/></svg>`,
      title: "Address",
      value: PortfolioDetails.common.address,
    },
  ];

  return (
    <div className="iknow_tm_contact">
      <div className="iknow_tm_main_title">
        <span>Contact Me</span>
        <h3>Connect with me with provided details.</h3>
      </div>
      <div className="wrapper">
        <div className="left">
          <ul>
            {infos.map((info) => (
              <li key={info.id}>
                <div className="list_inner">
                  <span
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: info.icon }}
                  ></span>
                  <div className="short">
                    <h3>{info.title}</h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: info.value,
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
