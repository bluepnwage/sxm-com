"use client";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@/lib/icons";
import styles from "./styles.module.css";
import { forwardRef, useState } from "react";
import { cx } from "cva";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";

function Link({ href, ...props }: RadixNavigationMenu.NavigationMenuLinkProps) {
  return (
    <RadixNavigationMenu.Link asChild {...props}>
      <NextLink href={href || ""} className="p-1 w-full ml-2 inline-block">
        {props.children}
      </NextLink>
    </RadixNavigationMenu.Link>
  );
}

export const NavigationMenu = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <RadixNavigationMenu.Root
      value={value}
      onValueChange={setValue}
      className={cx("relative flex  w-5/6 z-50", styles.navRoot)}
    >
      <RadixNavigationMenu.List className="flex gap-4 grow w-full  rounded-md m-0">
        <Item>
          <Link href={"/institutions"}>Votre collectivite</Link>

          {/* <Trigger>
            Votre collectivite <CaretDownIcon width={19} height={19} className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className="grid-cols-2">
            <ul>
              <li>
                <p className="text-gray-900 font-bold text-lg">Les Institutions</p>
              </li>
              <ListItem href="https://stitches.dev/" title="Le president" />
              <ListItem href="/colors" title="Vos ELus" />
              <ListItem href="https://icons.radix-ui.com/" title="Cabinet du president" />
              <ListItem href="https://icons.radix-ui.com/" title="Les services de la collectivite" />
              <ListItem href="https://icons.radix-ui.com/" title="Maison de St Martin a Paris" />
              <ListItem href="https://icons.radix-ui.com/" title="CESC" />
              <ListItem href="https://icons.radix-ui.com/" title="Les Conseils de quartiers" />
            </ul>
            <ul>
              <li>
                <p className="font-bold text-lg text-gray-900">Les Publications</p>
              </li>
              <ListItem href="https://stitches.dev/" title="Les deliberations" />
              <ListItem href="/colors" title="Les arretes" />
              <ListItem href="https://icons.radix-ui.com/" title="Les comptes-rendus du conseil executif" />
              <ListItem href="https://icons.radix-ui.com/" title="Les comptes-rendus du conseil territorial" />
              <ListItem href="https://icons.radix-ui.com/" title="Le journal officiel" />
              <ListItem href="https://icons.radix-ui.com/" title="Les newsletters mensuelles" />
            </ul>
          </Content> */}
        </Item>

        <Item className="grow">
          <Trigger>
            Saint-Martin et vous <CaretDownIcon width={19} height={19} className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className="grid-cols-3 gap-4">
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">Vie Citoyenne & services</p>
              </li>
              <ListItem title="Accueil du public" href="/docs/primitives/overview/introduction" />
              <ListItem title="Aides demarches et services" href="/docs/primitives/overview/getting-started" />
              <ListItem title="Etat civil" href="/docs/primitives/overview/styling" />
              <ListItem title="Les elections" href="/docs/primitives/overview/animation" />
              <ListItem title="Numero utils" href="/docs/primitives/overview/accessibility" />
              <ListItem title="Securite" href="/docs/primitives/overview/releases" />
            </ul>
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">St Martin au jour le jour</p>
              </li>
              <ListItem title="Actualites" href="/docs/primitives/overview/introduction" />
              <ListItem title="Les videos" href="/docs/primitives/overview/getting-started" />
              <ListItem title="Les communiques" href="/docs/primitives/overview/styling" />
              <ListItem title="Les arretes" href="/docs/primitives/overview/animation" />
            </ul>
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">Propreté & environnement</p>
              </li>
              <ListItem title="Eco site de Grand Caye" href="/docs/primitives/overview/introduction" />
              <ListItem title="Decheterie de Galisbay" href="/docs/primitives/overview/getting-started" />
              <ListItem title="Reserve naturelle" href="/docs/primitives/overview/styling" />
              <ListItem title="Eaux et assainissements" href="/docs/primitives/overview/animation" />
              <ListItem title="Donnees geographiques" href="/docs/primitives/overview/animation" />
            </ul>
          </Content>
        </Item>
        <Item className="grow">
          <Trigger>
            Pratique <CaretDownIcon width={19} height={19} className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className="grid-cols-3 gap-4">
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">Demarches, informations</p>
              </li>
              <ListItem title="Accueil / Informations / Orientation" href="/docs/primitives/overview/introduction" />
              <ListItem title="Aides a la formation" href="/docs/primitives/overview/getting-started" />
              <ListItem title="Archives territoriales" href="/docs/primitives/overview/styling" />
              <ListItem title="Bourses / Ecoles / Education" href="/docs/primitives/overview/animation" />
              <ListItem title="Culture Jeunesse" href="/docs/primitives/overview/accessibility" />
              <ListItem title="Fiscalite" href="/docs/primitives/overview/releases" />
            </ul>
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">Territoires</p>
              </li>
              <ListItem
                title="Plan d amenagement et de development de Saint-Martin"
                href="/docs/primitives/overview/introduction"
              />
              <ListItem
                title="Amenagement du territoire et urbanisme"
                href="/docs/primitives/overview/getting-started"
              />
              <ListItem title="Les communiques" href="/docs/primitives/overview/styling" />
              <ListItem title="Les arretes" href="/docs/primitives/overview/animation" />
            </ul>
            <ul>
              <li>
                <p className="text-gray-900 text-lg font-bold">Propreté & environnement</p>
              </li>
              <ListItem title="Eco site de Grand Caye" href="/docs/primitives/overview/introduction" />
              <ListItem title="Decheterie de Galisbay" href="/docs/primitives/overview/getting-started" />
              <ListItem title="Reserve naturelle" href="/docs/primitives/overview/styling" />
              <ListItem title="Eaux et assainissements" href="/docs/primitives/overview/animation" />
              <ListItem title="Donnees geographiques" href="/docs/primitives/overview/animation" />
            </ul>
          </Content>
        </Item>

        <RadixNavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
          <div className={styles.Arrow} />
        </RadixNavigationMenu.Indicator>
      </RadixNavigationMenu.List>
      <AnimatePresence>
        {value && (
          <motion.div
            key={"nav-menu"}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, transition: { duration: 0.2, bounce: 0.2, type: "spring" } }}
            transition={{ duration: 0.2, bounce: 0.2, type: "spring" }}
            className={styles.ViewportPosition}
          >
            <RadixNavigationMenu.Viewport className={"bg-white shadow-md rounded-md w-fit"} />
          </motion.div>
        )}
      </AnimatePresence>
    </RadixNavigationMenu.Root>
  );
};

function Item(props: RadixNavigationMenu.NavigationMenuItemProps) {
  return (
    <RadixNavigationMenu.Item {...props} className="hover:bg-zinc-100 grow  rounded-sm">
      {props.children}
    </RadixNavigationMenu.Item>
  );
}
function Content(props: RadixNavigationMenu.NavigationMenuContentProps) {
  return (
    <RadixNavigationMenu.Content
      {...props}
      asChild
      className={cx("grid w-fit p-4 bg-white shadow-lg", props.className)}
    >
      <motion.div transition={{ duration: 0.4 }}>{props.children}</motion.div>
    </RadixNavigationMenu.Content>
  );
}

function Trigger(props: RadixNavigationMenu.NavigationMenuTriggerProps) {
  return (
    <RadixNavigationMenu.Trigger
      {...props}
      className="select-none w-full font-medium text-gray-900 leading-none rounded flex items-center justify-between py-2 px-3 outline-none appearance-none ring-primary-color/50 focus:ring-1"
    >
      {props.children}
    </RadixNavigationMenu.Trigger>
  );
}

const ListItem = forwardRef<HTMLAnchorElement, RadixNavigationMenu.PrimitiveLinkProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li className="ring-primary-color/50 rounded-sm focus-within:ring-1">
      <RadixNavigationMenu.Link asChild className="appearance-none outline-none ">
        <a {...props} className="appearance-none outline-none" ref={forwardedRef}>
          <div className={" hover:bg-zinc-100 p-1 rounded-sm text-primary-color"}>{title}</div>
        </a>
      </RadixNavigationMenu.Link>
    </li>
  )
);
