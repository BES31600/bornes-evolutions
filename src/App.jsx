import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Bornes Evolutions Services</h1>
        <p className="text-lg text-muted-foreground">
          Mise en relation avec des installateurs IRVE agréés Ze-ready en Haute-Garonne (Occitanie)
        </p>
        <Button className="text-lg px-6 py-3">Demander un devis gratuit</Button>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Particuliers</h2>
            <p>Installation de bornes à domicile avec aides et fiscalité avantageuse.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Professionnels</h2>
            <p>Solutions pour flottes, bureaux, parkings et accès clients ou salariés.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Syndics / Copropriétés</h2>
            <p>Accompagnement pour la mise en conformité et la répartition des coûts.</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Pourquoi nous choisir ?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Réseau local d’installateurs certifiés IRVE & Ze-ready</li>
          <li>Intervention rapide en Haute-Garonne et Occitanie</li>
          <li>Conseils personnalisés selon vos besoins</li>
          <li>Devis gratuits et accompagnement aux aides (Advenir, crédit d'impôt…)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Contactez-nous</h2>
        <form className="grid gap-4 max-w-xl">
          <Input placeholder="Nom" required />
          <Input type="email" placeholder="Email" required />
          <Input type="tel" placeholder="Téléphone" />
          <Textarea placeholder="Décrivez votre besoin..." rows={4} />
          <Button type="submit">Envoyer</Button>
        </form>
      </section>
    </main>
  );
}
