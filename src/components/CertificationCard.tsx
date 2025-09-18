import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  image,
}: CertificationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-card">
      {image && (
        <div className="aspect-[16/9] overflow-hidden bg-gradient-subtle">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <Award className="h-8 w-8 text-primary" />
          {credentialUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{issuer}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        {credentialId && (
          <p className="text-xs text-muted-foreground mt-2">
            ID: {credentialId}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationCard;